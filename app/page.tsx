const linkedin = "https://www.linkedin.com/in/mathew-loulas-81b358426/";
const email = "mailto:mateus.lolas.unb@gmail.com";

const capabilities = ["AI systems architecture", "Multi-model orchestration", "Human-in-the-loop governance", "AI-native product development", "API and cloud integration", "Operational documentation"];
const method = [
  ["01", "Map complexity", "Clarify the real problem, actors, constraints and evidence."],
  ["02", "Define authority", "Separate model roles, human judgment and irreversible decisions."],
  ["03", "Build the system", "Connect software, models, knowledge, operations and communication."],
  ["04", "Validate and evolve", "Test, document failures, preserve decisions and improve from evidence."],
];
const personSchema = {
  "@context": "https://schema.org", "@type": "Person", name: "Mathew Loulas", alternateName: "Mateus Lolas",
  url: "https://mateus-lolas-architect.mateus-lolas-unb.chatgpt.site", email: "mailto:mateus.lolas.unb@gmail.com",
  jobTitle: "AI Systems and Venture Architect", sameAs: [linkedin, "https://mindfax.art"],
  knowsAbout: ["AI systems architecture", "Agentic AI", "Human-in-the-loop governance", "Public-sector leadership", "Educational innovation", "Intellectual property"],
};

export default function Home() {
  return <main>
    <a className="skipLink" href="#content">Skip to content</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    <nav className="nav shell" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Mathew Loulas — home">ML<span>/</span>ARCHITECT</a>
      <div className="navlinks"><a href="#work">Work</a><a href="#method">Method</a><a href="#background">Background</a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a className="navcta" href={email}>Contact</a></div>
    </nav>
    <div id="content">
      <section id="top" className="hero shell">
        <div className="eyebrow">AI systems · venture building · institutional leadership</div>
        <h1>I build the operating system behind <em>complex ambitions.</em></h1>
        <p className="lead">Mathew Loulas is a systems architect specialized in AI, founder, public-sector leader, educator and author. He connects models, software, operations, knowledge and accountable human decisions.</p>
        <p className="identityNote">Mateus Lolas in Brazilian public and academic records.</p>
        <div className="heroActions"><a className="button primary" href="#work">View selected systems</a><a className="button ghost" href={linkedin} target="_blank" rel="noreferrer">Open LinkedIn ↗</a></div>
        <div className="signal"><span>International focus</span>Agentic AI solutions · AI product building · forward-deployed AI · technical product leadership</div>
      </section>
      <section className="proof shell" aria-label="Professional pillars">
        {[["01","Human-governed AI"],["02","Venture building"],["03","Public leadership"],["04","Education and social impact"]].map(([n,l])=><div key={n}><span>{n}</span><strong>{l}</strong></div>)}
      </section>
      <section id="work" className="section shell">
        <header className="sectionHead"><p>Selected systems</p><h2>Evidence of architecture across AI, operations and institutions.</h2></header>
        <Case tone="casePurple" top="01 / AI operations company" status="Live venture" title={<>MINDFAX<br/>OPS</>} intro="AI agents built to operate, report and improve — with human approval where it matters.">
          <p>Designed as the operational arm of the Mindfax ecosystem, MINDFAX OPS builds, hosts and monitors agents for repeatable business workflows.</p>
          <List items={["Agent architecture, hosting and monitoring","Human approval for irreversible actions","Operational logs, exception handling and reporting","Designed for agencies and consultancies"]}/>
          <a className="textLink" href="https://mindfax.art/ops/" target="_blank" rel="noreferrer">Explore MINDFAX OPS ↗</a>
        </Case>
        <Case tone="caseDark" top="02 / Autonomous systems laboratory" status="Private R&D · public architecture" title={<>SFC</>} intro="A human-governed, AI-native laboratory built in the demanding environment of financial markets.">
          <p>An evolving system that integrates specialized AI collaborators, persistent cloud infrastructure, market and execution APIs, operational messaging, audit trails and explicit human authority over strategy and risk.</p>
          <List items={["Multi-model orchestration and role separation","Cloud operations, APIs and persistent state","Failure analysis, recovery and versioned redesign","Risk controls and human decision boundaries"]}/>
          <p className="disclosure">The public case addresses engineering and governance only. Strategies, credentials, capital positions, parameters and performance remain private.</p>
        </Case>
        <Case tone="caseLight" top="03 / AI-native intellectual property studio" status="Publishing · web · media · products" title={<>MINDFAX<br/>STUDIO</>} intro="A creative and editorial system that turns ideas into intellectual property and public experiences.">
          <p>Architected an ecosystem spanning research, writing, digital publishing, branded web products, multimedia production and coordinated distribution.</p>
          <List items={["Distinct narrative universes and product brands","Integrated research, editorial and media workflows","Web experiences designed as product evidence","Human authorship amplified by specialized AI collaborators"]}/>
          <a className="textLink" href="https://mindfax.art" target="_blank" rel="noreferrer">Visit mindfax.art ↗</a>
        </Case>
      </section>
      <section id="method" className="method"><div className="shell"><header className="methodHead"><p>The Architect Method</p><h2>One discipline across different domains.</h2></header><div className="methodGrid">{method.map(([n,t,x])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>)}</div></div></section>
      <section className="profile"><div className="shell profileGrid">
        <div><p className="kicker">A nontraditional technical profile</p><h2>Architecture is the through-line.</h2></div>
        <div className="profileCopy"><p>Across government, education, humanitarian initiatives, creative production and software, the recurring work is the same: turn complexity into an accountable operating system.</p><p>Models are not presented as autonomous authors. Mathew remains the architect, operator and final authority; AI systems act as specialized collaborators for research, development, review and production.</p></div>
        <div className="capabilities">{capabilities.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span>{item}</div>)}</div>
      </div></section>
      <section id="background" className="background shell">
        <header className="sectionHead"><p>Background</p><h2>The technical work is strengthened by a career built around people and institutions.</h2></header>
        <div className="backgroundGrid">
          <article><span>Public leadership</span><p>Career public servant with experience in citizen services, planning, institutional development, oversight and the governance of social initiatives.</p></article>
          <article><span>Education</span><p>Educator and executive coordinator of PESES since 2009, connecting socially vulnerable students with language learning at the University of Brasília.</p></article>
          <article><span>Humanitarian and social impact</span><p>Founder and leader of humanitarian, educational and social initiatives, connecting public institutions, civil society and practical community delivery.</p></article>
          <article><span>Writing and intellectual property</span><p>Science-fiction author and creator of narrative universes, educational methods, digital products and AI-native publishing systems.</p></article>
        </div>
        <p className="languageNote"><strong>Working languages:</strong> Portuguese and Spanish; functional technical English supported by AI-assisted workflows.</p>
      </section>
      <section className="contact"><div className="shell contactInner"><p>International roles · AI operations · institutional partnerships</p><h2>Let&apos;s build the system behind the ambition.</h2><div className="contactLinks"><a href={email}>Email <span>↗</span></a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href="https://mindfax.art" target="_blank" rel="noreferrer">Mindfax <span>↗</span></a></div></div></section>
    </div>
    <footer className="shell"><span>Mathew Loulas · Mateus Lolas in Brazil</span><span>AI Systems &amp; Venture Architect · 2026</span></footer>
  </main>;
}

function Case({tone,top,status,title,intro,children}:{tone:string;top:string;status:string;title:React.ReactNode;intro:string;children:React.ReactNode}) {
  return <article className={`case ${tone}`}><div className="caseTop"><span>{top}</span><span>{status}</span></div><div className="caseGrid"><div><h3>{title}</h3><p className="caseIntro">{intro}</p></div><div>{children}</div></div></article>;
}
function List({items}:{items:string[]}) { return <ul>{items.map(item=><li key={item}>{item}</li>)}</ul>; }
