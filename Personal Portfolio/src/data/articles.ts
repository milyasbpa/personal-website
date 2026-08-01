export interface Article {
  slug: string
  title: string
  date: string
  read: string
  tag: string
  excerpt: string
  content: string
}

export const ARTICLES: Article[] = [
  {
    slug: 'intentional-animation-product-ui',
    title: 'The Case for Intentional Animation in Product UI',
    date: 'Jul 12, 2026',
    read: '5 min read',
    tag: 'Design Engineering',
    excerpt:
      "Most animations in product interfaces exist because engineers could add them, not because users needed them. Here's how I think about motion with purpose.",
    content: `
## Why most animations feel wrong

Open any SaaS dashboard built in the last three years and you'll find the same thing: elements fading in on scroll, cards lifting on hover, modals dissolving into view. The animations are smooth. They're technically correct. And they feel completely arbitrary.

The problem isn't the animation itself — it's the absence of intent. When motion doesn't communicate something, it becomes noise. And noise, even beautiful noise, erodes trust in an interface.

I've been thinking about this a lot while working on design systems where animation tokens have to serve dozens of different contexts. What I've landed on is a simple test: **does this motion answer a question the user is already asking?**

## The three questions motion can answer

When a user interacts with an interface, they're implicitly asking one of three things:

1. **Where did it go?** — An element disappearing without motion leaves the user disoriented. A quick fade or slide-out confirms the action was received and shows where focus should go next.

2. **What just happened?** — Feedback animations (button press states, form submission confirmation) close the loop between action and result. Without them, users click twice.

3. **How do these things relate?** — Shared element transitions between views (a card expanding into a detail page, for example) communicate hierarchy and relationship better than any static layout can.

If your animation doesn't answer one of those questions, it's decoration. Decoration has a place — but it belongs in marketing sites, not in tools people use to get work done.

\`\`\`tsx
// Example: purposeful loading state vs. decorative spinner
// Purposeful — communicates progress, answers "is it working?"
const ProgressButton = ({ loading, children }) => (
  <button className={loading ? 'opacity-70 cursor-wait' : ''}>
    {loading ? <Spinner size={16} /> : children}
  </button>
)

// Decorative — adds motion without communicating anything
const FancyButton = ({ children }) => (
  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
    {children}
  </motion.button>
)
\`\`\`

## Duration and easing are the hard part

Everyone focuses on what animates. Almost nobody thinks carefully about how long it takes.

A rule I follow: **UI animations should complete before the user notices them.** If someone can describe the animation while it's happening, it's too slow. 150–250ms is right for micro-interactions. 300–400ms for larger transitions. Anything over 500ms in a product interface needs a very good reason.

Easing matters as much as duration. Ease-out (fast start, slow finish) feels natural for things entering the screen — it mirrors how physical objects decelerate. Ease-in works for exits. Linear easing feels mechanical and should almost never be used for UI motion.

\`\`\`css
/* Tokens I use in my design system */
--ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0.0, 1, 1);
--ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);

--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 350ms;
\`\`\`

## Respecting reduced motion

Any animation system that doesn't account for \`prefers-reduced-motion\` is incomplete. Some users experience vestibular disorders where motion causes genuine physical discomfort. This isn't an edge case to handle later — it's a baseline requirement.

\`\`\`tsx
const useReducedMotion = () => {
  const [reduced, setReduced] = useState(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}
\`\`\`

## The practical upshot

Before adding any animation, I now ask: which of the three questions does this answer? If I can't answer that clearly, I remove it. The interface becomes quieter. It becomes more trustworthy. And the animations that remain actually get noticed — because they're doing real work.

Motion is expensive attention. Spend it carefully.
    `,
  },
  {
    slug: 'five-years-typescript-type-safety',
    title: 'What Five Years of TypeScript Taught Me About Type Safety',
    date: 'Jun 3, 2026',
    read: '7 min read',
    tag: 'TypeScript',
    excerpt:
      "TypeScript is not about catching errors. It's about making the right thing obvious. Five years in, here's what actually changed how I write code.",
    content: `
## The wrong mental model

For the first year I used TypeScript, I thought of it as a bug detector. Add types, run the compiler, catch mistakes before they reach production. That framing isn't wrong — TypeScript does catch bugs — but it misses the deeper value entirely.

The real shift came when I started thinking of types not as constraints but as **communication**. A type signature is a contract between the code that produces a value and the code that consumes it. When you write types well, you're not just satisfying the compiler — you're documenting intent in a form that can be verified.

## The \`unknown\` lesson

Nothing changed my TypeScript more than learning to prefer \`unknown\` over \`any\`.

\`any\` tells TypeScript: "trust me, I know what this is." \`unknown\` tells TypeScript: "I don't know what this is yet — make me prove it before I use it."

\`\`\`typescript
// Before: any collapses the type system locally
async function fetchUser(id: string): Promise<any> {
  const res = await fetch(\`/api/users/\${id}\`)
  return res.json()
}

// After: unknown forces you to validate at the boundary
async function fetchUser(id: string): Promise<User> {
  const res = await fetch(\`/api/users/\${id}\`)
  const data: unknown = await res.json()
  return parseUser(data) // throws if shape is wrong
}
\`\`\`

The second version is more work upfront. But it moves all the uncertainty to the boundary — the one place where uncertainty actually belongs. Everything downstream can trust its types completely.

## Discriminated unions over boolean flags

This one took me embarrassingly long to internalize. Whenever I find myself writing a type with multiple optional fields that only make sense in certain combinations, it's a sign I need a discriminated union.

\`\`\`typescript
// Fragile: these fields are implicitly coupled
type Request = {
  status: 'idle' | 'loading' | 'success' | 'error'
  data?: User
  error?: string
}

// Better: each state is explicit and self-contained
type Request =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: User }
  | { status: 'error'; error: string }
\`\`\`

The discriminated union version makes impossible states impossible to represent. You can't have \`status: 'idle'\` with a \`data\` field. The type system enforces the state machine.

## Generic constraints are expressive, not restrictive

Generics get a reputation for being complex. That's fair — they can be. But the right mental model is that generics let you be **precise about relationships** between types, rather than being either too specific or too loose.

\`\`\`typescript
// Too specific: only works with User
function getField(obj: User, key: keyof User): User[keyof User]

// Too loose: loses all type information
function getField(obj: object, key: string): unknown

// Just right: preserves the relationship
function getField<T, K extends keyof T>(obj: T, key: K): T[K]
\`\`\`

The generic version is readable, reusable, and fully type-safe. The return type is exactly \`T[K]\` — TypeScript knows precisely what comes back based on what you pass in.

## Template literal types for string safety

One of the less-celebrated features that I now use constantly: template literal types. They let you express constraints on string shapes that would otherwise require runtime validation.

\`\`\`typescript
type EventName = \`on\${Capitalize<string>}\`
// 'onClick' ✓  'onChange' ✓  'click' ✗

type CSSProperty = \`--\${string}\`
// '--color-primary' ✓  'color' ✗
\`\`\`

## The principle underneath it all

Five years of TypeScript taught me one thing above everything else: **push uncertainty to the edges**. Validate at boundaries — API responses, user input, environment variables. Once something enters your system with a verified type, it should stay verified. No casting, no \`any\`, no \`// @ts-ignore\`.

When I look at a codebase now, I can tell immediately how seriously the team takes types. Not by how many lines of TypeScript there are, but by how narrow the \`any\`s are and how deliberately the boundaries are handled.

The goal isn't to satisfy the compiler. It's to make the right thing obvious to the next person who reads the code.
    `,
  },
  {
    slug: 'css-grid-end-of-layout-frameworks',
    title: 'CSS Grid and the End of Layout Frameworks',
    date: 'Apr 18, 2026',
    read: '4 min read',
    tag: 'CSS',
    excerpt:
      "Bootstrap solved a real problem in 2011. In 2026, CSS Grid solves the same problem better, natively, with less code. Here's why I stopped using layout frameworks entirely.",
    content: `
## What Bootstrap actually solved

When Bootstrap launched in 2011, it solved a genuinely hard problem: making layouts work across browsers that had wildly inconsistent CSS support and no native grid system. The 12-column grid, the breakpoint system, the utility classes — all of it existed because CSS couldn't do it natively.

That constraint no longer exists. CSS Grid has been widely supported since 2017. Subgrid landed in all major browsers in 2023. And yet I still see new projects scaffolded with Bootstrap or MUI grid components that ultimately compile down to flexbox-based columns with margin math.

The abstraction layer is still there. The problem it solved is gone.

## What Grid gives you that frameworks can't

The fundamental difference between CSS Grid and any framework grid is that Grid operates on **two dimensions simultaneously**. Frameworks fake two-dimensional layout with nested one-dimensional rows. Grid actually understands the relationship between rows and columns.

\`\`\`css
/* Framework approach: nested rows and columns */
.row > .col-md-8 > .row > .col-sm-6 { ... }

/* Grid: layout declared on the container */
.layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "content sidebar"
    "footer  footer";
}
\`\`\`

The Grid version expresses the actual intent. You can read it and understand the layout. The framework version requires you to mentally map class names to column widths and nest depths.

## Named grid lines for component internals

For complex components — cards, article layouts, dashboards — I use named grid lines to create alignment points that children can attach to.

\`\`\`css
.article-layout {
  display: grid;
  grid-template-columns:
    [full-start] minmax(1rem, 1fr)
    [content-start] min(65ch, 100%)
    [content-end] minmax(1rem, 1fr)
    [full-end];
}

.article-layout > * { grid-column: content; }
.article-layout > .breakout { grid-column: full; }
\`\`\`

This is the pattern that makes editorial layouts with full-bleed images trivial. No wrapper hacks, no negative margins, no JavaScript.

## The responsive case

Frameworks solved responsiveness with breakpoint classes (\`col-md-6\`). Grid solves it more expressively:

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
\`\`\`

That single declaration creates a responsive grid that:
- Shows as many columns as fit at 280px minimum
- Fills available space equally
- Never needs a media query

No \`col-sm-12 col-md-6 col-lg-4\`. No JavaScript resize observers. Just CSS expressing intent.

## When to still reach for a utility library

I'm not arguing against Tailwind or utility CSS — I use Tailwind on every project. The distinction is between **layout frameworks** (Bootstrap grid, MUI Grid) and **utility libraries** (Tailwind, UnoCSS). Utilities compose; layout frameworks impose structure.

Use CSS Grid for layout. Use utility classes for spacing, color, and typography. Let the browser do the geometry.

The era of layout frameworks was necessary. It's over now.
    `,
  },
  {
    slug: 'design-systems-at-scale',
    title: 'Design Systems at Scale: What Nobody Tells You',
    date: 'Mar 5, 2026',
    read: '6 min read',
    tag: 'Design Systems',
    excerpt:
      "After building three design systems from scratch, I've learned the hard lessons: documentation is code, tokens are contracts, and adoption is a product problem.",
    content: `## The hardest part isn't the components

Every design system project I've been part of started the same way: a Figma file, a component list, and a lot of enthusiasm. Buttons, inputs, modals — the obvious stuff gets built first because it's satisfying and concrete.

The hard parts come later. Documentation that goes stale. Token naming that made sense in week one and causes arguments in month six. Teams that fork the system rather than contribute to it.

The technical problems are solvable. The organizational ones are where design systems actually fail.

## Tokens are contracts, not variables

When most teams start with design tokens, they treat them like CSS variables — convenient aliases for values. That's fine until you have multiple platforms, multiple themes, or multiple teams consuming the same tokens.

The shift I made was treating tokens as **public API**. Once a token is shipped and consumed, renaming it is a breaking change. Adding it is a minor change. Removing it requires deprecation.

This sounds like overhead. It is. But it's the overhead of a distributed system, which is what a design system actually is once more than one team uses it.

## Documentation is code

Storybook is non-negotiable for me now. Not because of the component browser — because Storybook stories are executable documentation. They can be tested, diffed, and verified. Markdown docs rot; stories break loudly when components change.

The pattern I've settled on: every story is also a test. If it renders, the component works. If it renders in every story variant, the component handles its edge cases. Visual regression testing on stories catches unintentional changes before users do.

## Adoption is a product problem

The worst design system is the one nobody uses. I've seen this happen even with beautifully built systems. Teams fork it because the contribution process is opaque, or because getting a missing component merged takes three weeks.

Treating adoption as a product problem changes the frame. Who are the users? What do they need to succeed? What friction stops them from contributing? A design system team that never talks to the teams using the system is building in a vacuum.

The best adoption metric I've found: what percentage of new UI surfaces are built using system components? If that number isn't going up quarter over quarter, something is broken in the adoption loop — not necessarily in the components.

## What I'd do differently

If I were starting a design system today, I'd invest in three things early that I always underinvest in:

1. **Token governance** — decide naming conventions and change policies before shipping anything
2. **Contribution workflow** — make it easy for consuming teams to propose and test changes
3. **Usage tracking** — know what's being used so you can make good deprecation decisions

The components are the easy part. Build the system around them carefully.
    `,
  },
]

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug)
}
