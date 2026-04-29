import { useState, useRef } from "react";
import Logo from "../components/Logo";
import Eyebrow from "../components/Eyebrow";

// ─── DESIGN TOKENS ─────────────────────────────────────────────────────────
const C = {
  bg:       "#080808",
  bg2:      "#0A0A0A",
  bg3:      "#0D0D0D",
  bg4:      "#111111",
  border:   "#141414",
  border2:  "#1a1a1a",
  border3:  "#2a2a2a",
  teal:     "#1D9E75",
  tealBg:   "#0f1a16",
  tealDark: "#0f3d2a",
  text:     "#EFEFEF",
};

// ─── SHARED STYLES ─────────────────────────────────────────────────────────
const base = {
  page:       { background: C.bg, minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif", padding: "clamp(32px, 6vw, 56px) clamp(16px, 4vw, 32px) 96px" },
  shell:      { maxWidth: "680px", margin: "0 auto", width: "100%" },
  nav:        { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "60px" },
  heading:    { fontSize: "21px", fontWeight: 500, color: C.text, margin: "0 0 10px", letterSpacing: "-0.01em" },
  subhead:    { fontSize: "14px", color: "#666", lineHeight: 1.7, margin: "0 0 40px" },
  label:      { display: "block", fontSize: "12px", fontWeight: 500, color: "#555", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "8px" },
  hint:       { fontSize: "11px", color: "#444", marginTop: "6px", lineHeight: 1.5 },
  input:      { width: "100%", background: C.bg3, border: `0.5px solid ${C.border2}`, borderRadius: "6px", padding: "12px 16px", fontSize: "14px", color: C.text, outline: "none", fontFamily: "inherit", boxSizing: "border-box" },
  textarea:   { width: "100%", background: C.bg3, border: `0.5px solid ${C.border2}`, borderRadius: "6px", padding: "12px 16px", fontSize: "14px", color: C.text, outline: "none", fontFamily: "inherit", resize: "none", lineHeight: 1.6, boxSizing: "border-box" },
  btnPrimary: { background: C.text, color: C.bg, fontSize: "15px", fontWeight: 500, padding: "15px 36px", borderRadius: "6px", border: "none", cursor: "pointer", letterSpacing: "-0.01em" },
  btnBack:    { fontSize: "14px", color: "#555", border: `0.5px solid ${C.border3}`, padding: "15px 22px", borderRadius: "6px", background: "transparent", cursor: "pointer", fontFamily: "inherit" },
};

// ─── SMALL COMPONENTS ──────────────────────────────────────────────────────

function ProgressBar({ current, total, labels }) {
  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4px", marginBottom: "48px" }}>
      {labels.map((lbl, i) => {
        const n = i + 1;
        const done = n < current;
        const active = n === current;
        return (
          <div key={n} style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{
                width: "26px", height: "26px", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "11px", fontWeight: 500,
                background: done ? C.teal : active ? C.text : "transparent",
                color: done ? "#fff" : active ? C.bg : "#444",
                border: done || active ? "none" : `0.5px solid ${C.border3}`,
              }}>
                {done ? "✓" : n}
              </div>
              <span className="intake-step-label" style={{ fontSize: "12px", color: active ? C.text : "#444" }}>{lbl}</span>
            </div>
            {i < labels.length - 1 && (
              <div style={{ width: "24px", height: "1px", background: done ? C.teal : C.border3, margin: "0 6px" }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function Field({ label, hint, children }) {
  return (
    <div style={{ marginBottom: "28px" }}>
      {label && <label style={base.label}>{label}</label>}
      {children}
      {hint && <div style={base.hint}>{hint}</div>}
    </div>
  );
}

function ChoiceGrid({ options, value, onChange, multi = false, cols = 2, className = "" }) {
  return (
    <div className={`intake-choice-grid intake-choice-grid--${cols}${className ? ` ${className}` : ""}`} style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`, gap: "8px" }}>
      {options.map(opt => {
        const selected = multi
          ? (value || []).includes(opt.value)
          : value === opt.value;
        return (
          <div
            key={opt.value}
            onClick={() => {
              if (multi) {
                const cur = value || [];
                onChange(selected ? cur.filter(v => v !== opt.value) : [...cur, opt.value]);
              } else {
                onChange(opt.value);
              }
            }}
            style={{
              background: selected ? C.tealBg : C.bg3,
              border: `0.5px solid ${selected ? C.teal : C.border2}`,
              borderRadius: "6px", padding: "12px 14px", cursor: "pointer",
              transition: "border-color 0.15s",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: 500, color: C.text }}>{opt.label}</div>
            {opt.sub && <div style={{ fontSize: "11px", color: "#444", marginTop: "2px" }}>{opt.sub}</div>}
          </div>
        );
      })}
    </div>
  );
}

function FocusBorder({ children }) {
  const [focused, setFocused] = useState(false);
  return (
    <div
      style={{ border: `0.5px solid ${focused ? C.teal : C.border2}`, borderRadius: "6px", transition: "border-color 0.15s" }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {children}
    </div>
  );
}

function TextInput({ placeholder, value, onChange, type = "text" }) {
  return (
    <FocusBorder>
      <input
        type={type}
        placeholder={placeholder}
        value={value || ""}
        onChange={e => onChange(e.target.value)}
        style={{ ...base.input, border: "none", borderRadius: "6px", outline: "none" }}
      />
    </FocusBorder>
  );
}

function TextArea({ placeholder, value, onChange, rows = 4 }) {
  return (
    <FocusBorder>
      <textarea
        placeholder={placeholder}
        value={value || ""}
        onChange={e => onChange(e.target.value)}
        rows={rows}
        style={{ ...base.textarea, border: "none", borderRadius: "6px", outline: "none" }}
      />
    </FocusBorder>
  );
}

function SmartNote({ text }) {
  if (!text) return null;
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", background: "#0a1812", border: `0.5px solid ${C.tealDark}`, borderRadius: "6px", padding: "12px 14px", marginTop: "10px" }}>
      <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: C.teal, flexShrink: 0, marginTop: "5px" }} />
      <p style={{ fontSize: "12px", color: "#555", lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

// ─── PAGE BUILDER ──────────────────────────────────────────────────────────

const SUGGESTED_PAGES = ["Team", "Attorneys", "Practice Areas", "Blog", "Case Studies", "FAQ", "Resources", "Events", "Donate", "Gallery", "Testimonials", "News", "Portfolio", "Pricing", "Press"];

function PageBuilder({ pages, onChange }) {
  const [newPage, setNewPage] = useState("");
  const inputRef = useRef();

  const addPage = (name = "") => {
    const n = name || newPage.trim();
    if (!n) return;
    onChange([...pages, { id: Date.now(), name: n, desc: "" }]);
    setNewPage("");
  };

  const updatePage = (id, field, val) => {
    onChange(pages.map(p => p.id === id ? { ...p, [field]: val } : p));
  };

  const removePage = (id) => {
    onChange(pages.filter(p => p.id !== id));
  };

  const usedNames = pages.map(p => p.name.toLowerCase());

  const smartText = pages.length <= 2
    ? `<strong style="color:#1D9E75">${pages.length} page${pages.length !== 1 ? "s" : ""} added.</strong> Looks like a focused build — we'll scope it right after reviewing your brief.`
    : pages.length <= 5
    ? `<strong style="color:#1D9E75">${pages.length} pages added.</strong> Good scope — we'll review everything and come back with the right recommendation.`
    : pages.length <= 9
    ? `<strong style="color:#1D9E75">${pages.length} pages added.</strong> This is shaping up to be a solid mid-size build. We'll scope it carefully.`
    : `<strong style="color:#1D9E75">${pages.length} pages added.</strong> Looks like a larger project — we'll review and may schedule a short scoping call to get it right.`;

  return (
    <div>
      <div style={{ background: C.bg3, border: `0.5px solid ${C.border2}`, borderRadius: "8px", overflow: "hidden", marginBottom: "10px" }}>
        <div style={{ padding: "12px 16px", borderBottom: `0.5px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "#444", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>Your pages</span>
          <span style={{ fontSize: "11px", color: C.teal }}>{pages.length} page{pages.length !== 1 ? "s" : ""}</span>
        </div>

        <div style={{ padding: "8px", display: "flex", flexDirection: "column", gap: "6px", minHeight: "48px" }}>
          {pages.length === 0 && (
            <div style={{ padding: "20px", textAlign: "center", fontSize: "13px", color: "#333" }}>
              Add your first page below
            </div>
          )}
          {pages.map(p => (
            <div key={p.id} style={{ display: "flex", alignItems: "center", gap: "8px", background: C.bg4, border: `0.5px solid ${C.border}`, borderRadius: "6px", padding: "10px 12px" }}>
              <span style={{ color: "#333", fontSize: "12px", cursor: "grab", userSelect: "none", flexShrink: 0 }}>⠿</span>
              <input
                value={p.name}
                onChange={e => updatePage(p.id, "name", e.target.value)}
                placeholder="Page name"
                style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: "13px", color: C.text, fontFamily: "inherit" }}
              />
              <div style={{ width: "1px", height: "18px", background: C.border2, flexShrink: 0 }} />
              <input
                value={p.desc}
                onChange={e => updatePage(p.id, "desc", e.target.value)}
                placeholder="What should this page do? (optional)"
                style={{ flex: 1.5, background: "transparent", border: "none", outline: "none", fontSize: "12px", color: "#3a3a3a", fontFamily: "inherit" }}
              />
              <button onClick={() => removePage(p.id)} style={{ width: "20px", height: "20px", background: "transparent", border: "none", color: "#333", cursor: "pointer", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: 0 }}>×</button>
            </div>
          ))}
        </div>

        <div style={{ padding: "8px", borderTop: `0.5px solid ${C.border}` }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              ref={inputRef}
              value={newPage}
              onChange={e => setNewPage(e.target.value)}
              onKeyDown={e => e.key === "Enter" && addPage()}
              placeholder="Type a page name and press Enter..."
              style={{ flex: 1, background: "transparent", border: `0.5px dashed ${C.border2}`, borderRadius: "6px", padding: "10px 14px", fontSize: "13px", color: C.text, outline: "none", fontFamily: "inherit" }}
            />
            <button onClick={() => addPage()} style={{ background: C.teal, border: "none", borderRadius: "6px", width: "40px", fontSize: "18px", color: "#fff", cursor: "pointer", flexShrink: 0 }}>+</button>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "8px" }}>
        {SUGGESTED_PAGES.map(name => {
          const used = usedNames.includes(name.toLowerCase());
          return (
            <button
              key={name}
              onClick={() => !used && addPage(name)}
              style={{
                fontSize: "11px", padding: "4px 10px", borderRadius: "100px",
                border: `0.5px solid ${used ? C.border2 : C.border3}`,
                background: "transparent", color: used ? C.border3 : "#444",
                cursor: used ? "default" : "pointer", fontFamily: "inherit",
                opacity: used ? 0.4 : 1,
              }}
            >
              {used ? "✓" : "+"} {name}
            </button>
          );
        })}
      </div>

      <SmartNote text={smartText} />
    </div>
  );
}

// ─── STEP COMPONENTS ───────────────────────────────────────────────────────

function Step1({ data, set }) {
  return (
    <div>
      <p style={base.heading}>Let's start with you.</p>
      <p style={base.subhead}>Just the basics — so we know who we're talking to.</p>
      <div className="intake-name-grid">
        <Field label="First name"><TextInput placeholder="First name" value={data.firstName} onChange={v => set("firstName", v)} /></Field>
        <Field label="Last name"><TextInput placeholder="Last name" value={data.lastName} onChange={v => set("lastName", v)} /></Field>
      </div>
      <Field label="Business name"><TextInput placeholder="Your business or organization" value={data.businessName} onChange={v => set("businessName", v)} /></Field>
      <Field label="Email address"><TextInput type="email" placeholder="you@yourbusiness.com" value={data.email} onChange={v => set("email", v)} /></Field>
      <Field label="Phone (optional)"><TextInput type="tel" placeholder="+1 (555) 000-0000" value={data.phone} onChange={v => set("phone", v)} /></Field>
      <Field label="What type of business are you?">
        <ChoiceGrid
          value={data.businessType}
          onChange={v => set("businessType", v)}
          options={[
            { value: "law", label: "Law firm", sub: "Legal services" },
            { value: "nonprofit", label: "Nonprofit / foundation", sub: "Mission-driven org" },
            { value: "service", label: "Service business", sub: "Consulting, trades, local" },
            { value: "creative", label: "Creative / other", sub: "Studio, collective, brand" },
          ]}
        />
      </Field>
    </div>
  );
}

function Step2({ data, set }) {
  return (
    <div>
      <p style={base.heading}>Tell us about your site.</p>
      <p style={base.subhead}>No tech knowledge needed — just describe what you're thinking. We'll figure out the right approach.</p>
      <Field label="Do you have an existing website?">
        <ChoiceGrid
          value={data.hasWebsite}
          onChange={v => set("hasWebsite", v)}
          options={[
            { value: "yes", label: "Yes — needs redesign", sub: "It exists but isn't working" },
            { value: "no", label: "No — starting fresh", sub: "Building from zero" },
          ]}
        />
      </Field>
      {data.hasWebsite === "yes" && (
        <Field label="Current website URL" hint="Don't worry if it's outdated — that's why you're here.">
          <TextInput placeholder="www.yourbusiness.com" value={data.currentUrl} onChange={v => set("currentUrl", v)} />
        </Field>
      )}
      <Field
        label="What pages do you need?"
        hint="Type any page name or tap a suggestion. Add a note on what each page should do — it helps us scope accurately."
      >
        <PageBuilder pages={data.pages || []} onChange={v => set("pages", v)} />
      </Field>
      <Field label="How do you want people to feel when they land on your site?">
        <ChoiceGrid
          value={data.vibe}
          onChange={v => set("vibe", v)}
          options={[
            { value: "trustworthy", label: "Trustworthy & serious" },
            { value: "warm", label: "Warm & approachable" },
            { value: "bold", label: "Bold & modern" },
            { value: "minimal", label: "Clean & minimal" },
            { value: "energetic", label: "Energetic & creative" },
            { value: "professional", label: "Professional but human" },
          ]}
          cols={3}
        />
      </Field>
      <Field label="In plain language — what does your site need to do?">
        <TextArea
          placeholder="e.g. We're a 3-partner litigation firm. Our site is 8 years old and looks it. We need something modern that builds trust before a potential client picks up the phone."
          value={data.siteGoal}
          onChange={v => set("siteGoal", v)}
          rows={4}
        />
      </Field>
    </div>
  );
}

function Step3({ data, set }) {
  return (
    <div>
      <p style={base.heading}>Features & inspiration.</p>
      <p style={base.subhead}>Help us understand what the site needs to do — and what it should look like.</p>
      <Field label="Do you need to update your site yourself after launch?" hint="If yes, we'll build a content management system into your site automatically.">
        <ChoiceGrid
          value={data.selfUpdate}
          onChange={v => set("selfUpdate", v)}
          options={[
            { value: "yes-often", label: "Yes — regularly", sub: "Posts, bios, events, news" },
            { value: "yes-sometimes", label: "Occasionally", sub: "A few times a year" },
            { value: "no", label: "No — set it & forget it", sub: "I'll reach out when needed" },
            { value: "unsure", label: "Not sure yet", sub: "Help me decide" },
          ]}
        />
      </Field>
      <Field label="Does your site need any of these? (select all that apply)">
        <ChoiceGrid
          value={data.features}
          onChange={v => set("features", v)}
          multi
          options={[
            { value: "contact-form", label: "Contact / intake form" },
            { value: "booking", label: "Appointment booking" },
            { value: "payments", label: "Online payments / donate" },
            { value: "profiles", label: "Team / attorney profiles" },
            { value: "search", label: "Search or filtering" },
            { value: "multilingual", label: "Multilingual" },
            { value: "newsletter", label: "Newsletter signup" },
            { value: "none", label: "None of the above" },
          ]}
        />
      </Field>
      <Field label="Do you use any tools we should connect to?" hint="e.g. CRM, email platform, legal software, booking system — anything you'd want linked to the site.">
        <TextArea
          placeholder="e.g. We use Clio for case management. We'd love our contact form to feed into it automatically."
          value={data.integrations}
          onChange={v => set("integrations", v)}
          rows={3}
        />
      </Field>
      <Field label="Share any sites you admire" hint="Doesn't have to be in your industry. Just sites where you thought 'I wish ours looked like that.' Paste 1–3 links.">
        <TextArea
          placeholder="e.g. https://example.com — I love how clean it is. https://another.com — the way they present their team is great."
          value={data.inspiration}
          onChange={v => set("inspiration", v)}
          rows={3}
        />
      </Field>
      <Field label="Any sites you strongly dislike or want to avoid?" hint="This saves us a revision round. Be honest.">
        <TextArea
          placeholder="e.g. I hate sites that look like templates. Our competitor uses too many stock photos and we want nothing like that."
          value={data.avoid}
          onChange={v => set("avoid", v)}
          rows={3}
        />
      </Field>
    </div>
  );
}

function Step4({ data, set }) {
  return (
    <div>
      <p style={base.heading}>Let's collect your assets.</p>
      <p style={base.subhead}>Set up a shared Google Drive folder and drop everything in. We'll tell you what's missing — don't let this slow you down.</p>

      <div style={{ background: C.bg3, border: `0.5px solid ${C.border2}`, borderRadius: "8px", padding: "20px", marginBottom: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div style={{ width: "32px", height: "32px", background: C.bg4, border: `0.5px solid ${C.border2}`, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 19h20L12 2z" stroke={C.teal} strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 500, color: C.text }}>Setting up your Google Drive folder</div>
            <div style={{ fontSize: "12px", color: "#444" }}>Takes about 2 minutes</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            ["Go to", "drive.google.com", "and sign in with any Google account"],
            ["Click", "+ New → Folder", `Name it: "[Your Business] — Kashani Studio Assets"`],
            ["Right-click the folder →", "Share", `→ set access to "Anyone with the link — Viewer"`],
            ["Copy the share link", "and paste it in the field below", ""],
          ].map(([pre, bold, post], i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: C.tealDark, color: C.teal, fontSize: "11px", fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>{i + 1}</div>
              <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.5, margin: 0 }}>
                {pre} <strong style={{ color: "#777", fontWeight: 500 }}>{bold}</strong> {post}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Field label="Your Google Drive folder link">
        <TextInput placeholder="https://drive.google.com/drive/folders/..." value={data.driveLink} onChange={v => set("driveLink", v)} />
      </Field>

      <div style={{ background: C.bg3, border: `0.5px solid ${C.border2}`, borderRadius: "8px", padding: "18px 20px", marginBottom: "28px" }}>
        <div style={{ fontSize: "11px", color: "#555", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "14px" }}>What to put in the folder</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            ["Logo files", "SVG or PNG preferred — originals if possible"],
            ["Brand colors / style guide", "Even a screenshot of your old site works"],
            ["Team or office photos", "High-res, unedited originals"],
            ["Written content or copy", "Bios, service descriptions, about text"],
            ["Reference sites you like", "Screenshots or a doc with links"],
            ["Existing marketing materials", "Business cards, brochures, letterhead"],
          ].map(([item, note]) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: C.teal, opacity: 0.5, flexShrink: 0 }} />
              <span style={{ fontSize: "13px", color: "#555", flex: 1 }}>{item}</span>
              <span style={{ fontSize: "11px", color: "#3a3a3a" }}>{note}</span>
            </div>
          ))}
        </div>
      </div>

      <Field label="What don't you have yet?" hint="Don't let missing assets slow you down. We work with what you have and advise on the rest.">
        <TextArea
          placeholder="e.g. We don't have professional photos yet but planning a shoot next month. Our logo is only a JPEG — is that okay?"
          value={data.missingAssets}
          onChange={v => set("missingAssets", v)}
          rows={3}
        />
      </Field>
    </div>
  );
}

function Step5({ data, set }) {
  return (
    <div>
      <p style={base.heading}>Almost there.</p>
      <p style={base.subhead}>Last few questions before we review your brief and put together a tailored recommendation.</p>

      <Field label="Has your business invested in a website before?">
        <ChoiceGrid
          value={data.priorWebsite}
          onChange={v => set("priorWebsite", v)}
          options={[
            { value: "multiple", label: "Yes — multiple times" },
            { value: "once", label: "Yes — once" },
            { value: "diy", label: "Used a DIY builder", sub: "Wix, Squarespace, etc." },
            { value: "never", label: "No — first time" },
          ]}
        />
      </Field>

      <Field label="What's the main reason you need a new site right now?">
        <ChoiceGrid
          value={data.mainReason}
          onChange={v => set("mainReason", v)}
          options={[
            { value: "outdated", label: "We look outdated" },
            { value: "rebranded", label: "We just rebranded" },
            { value: "launching", label: "Launching something new" },
            { value: "leads", label: "Site isn't bringing in business" },
            { value: "scratch", label: "Starting from scratch" },
            { value: "other", label: "Other" },
          ]}
          cols={3}
        />
      </Field>

      <Field label="Who else is involved in approving this project?" hint="This helps us understand your decision process and write the right proposal.">
        <ChoiceGrid
          value={data.decisionMakers}
          onChange={v => set("decisionMakers", v)}
          options={[
            { value: "just-me", label: "Just me" },
            { value: "one-other", label: "Me + one other" },
            { value: "team", label: "A small team" },
            { value: "board", label: "Board / committee", sub: "Needs formal approval" },
          ]}
        />
      </Field>

      <Field label="Will you need ongoing support after launch?">
        <ChoiceGrid
          value={data.ongoingSupport}
          onChange={v => set("ongoingSupport", v)}
          options={[
            { value: "yes-monthly", label: "Yes — monthly updates", sub: "Care plan" },
            { value: "yes-occasional", label: "Occasionally", sub: "As needed" },
            { value: "no", label: "No — I'll handle it" },
            { value: "unsure", label: "Not sure yet" },
          ]}
        />
      </Field>

      <Field label="When do you need this done?">
        <ChoiceGrid
          value={data.timeline}
          onChange={v => set("timeline", v)}
          options={[
            { value: "asap", label: "ASAP", sub: "Within a few weeks" },
            { value: "month", label: "Next 1–2 months" },
            { value: "quarter", label: "Next quarter", sub: "Planning ahead" },
            { value: "flexible", label: "Flexible" },
          ]}
        />
      </Field>

      <Field label="How would you prefer to pay?" hint="We offer flexible financing — $500 down then monthly payments until paid off. You own the site outright at the end.">
        <ChoiceGrid
          value={data.payment}
          onChange={v => set("payment", v)}
          options={[
            { value: "upfront", label: "Upfront", sub: "Full or 50/50 split" },
            { value: "finance", label: "Finance it", sub: "$500 down + monthly" },
            { value: "unsure", label: "Not sure yet", sub: "Let's talk options" },
          ]}
        />
      </Field>

      <Field label="How did you hear about us?">
        <ChoiceGrid
          value={data.referral}
          onChange={v => set("referral", v)}
          options={[
            { value: "word-of-mouth", label: "Word of mouth" },
            { value: "google", label: "Google search" },
            { value: "linkedin", label: "LinkedIn" },
            { value: "instagram", label: "Instagram" },
            { value: "saw-work", label: "Saw your work" },
            { value: "other", label: "Other" },
          ]}
          cols={3}
        />
      </Field>

      <Field label="Anything else we should know?">
        <TextArea
          placeholder="Deadlines, languages, integrations, concerns, or anything that didn't fit above."
          value={data.extra}
          onChange={v => set("extra", v)}
          rows={3}
        />
      </Field>

      <Field label="Best way to follow up?">
        <ChoiceGrid
          value={data.followUp}
          onChange={v => set("followUp", v)}
          options={[
            { value: "email", label: "Email me", sub: "I'll reply within 24 hours" },
            { value: "call", label: "Book a call", sub: "Schedule a 30-min call" },
          ]}
        />
      </Field>
    </div>
  );
}

function Success() {
  return (
    <div style={{ textAlign: "center", padding: "40px 0" }}>
      <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: C.tealBg, border: `0.5px solid ${C.tealDark}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 13l4 4L19 7" stroke={C.teal} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h2 style={{ fontSize: "28px", fontWeight: 500, color: C.text, margin: "0 0 12px", letterSpacing: "-0.02em" }}>Brief received.</h2>
      <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.65, maxWidth: "400px", margin: "0 auto 36px" }}>
        We've got everything we need to put together the right recommendation. Expect a scoped proposal in your inbox within 24 hours.
      </p>
      <div style={{ background: C.bg3, border: `0.5px solid ${C.border2}`, borderRadius: "8px", padding: "20px 24px", maxWidth: "400px", margin: "0 auto", textAlign: "left" }}>
        <div style={{ fontSize: "11px", fontWeight: 500, color: C.teal, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "14px" }}>What happens next</div>
        {["We review your answers and assets", "We recommend the right scope and package", "You get a proposal within 24 hours", "One short call to align — then we build"].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#555", padding: "6px 0" }}>
            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: C.teal, flexShrink: 0 }} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN FORM ─────────────────────────────────────────────────────────────

const STEP_LABELS = ["About you", "Your site", "Features", "Assets", "Finish"];

const INITIAL_PAGES = [
  { id: 1, name: "Home", desc: "" },
  { id: 2, name: "About", desc: "" },
  { id: 3, name: "Services", desc: "" },
  { id: 4, name: "Contact", desc: "" },
];

export default function Intake() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ pages: INITIAL_PAGES });

  const set = (key, val) => setData(prev => ({ ...prev, [key]: val }));

  const handleSubmit = () => {
    // TODO: POST to backend / Formspree / Netlify Forms
    console.log("Submitted:", data);
    setStep(6);
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const next = () => { setStep(s => s + 1); scrollTop(); };
  const back = () => { setStep(s => s - 1); scrollTop(); };

  return (
    <div style={base.page}>
      <div style={base.shell}>

        {/* NAV */}
        <div style={base.nav}>
          <Logo />
          <a href="/" style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}>← Back to site</a>
        </div>

        {/* HEADER */}
        {step < 6 && (
          <>
            <Eyebrow label="Start a project" />
            <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 500, lineHeight: 1.08, letterSpacing: "-0.025em", color: C.text, margin: "0 0 16px" }}>
              Tell us about<br /><span style={{ color: "#2a2a2a" }}>your</span> project.
            </h1>
            <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.7, margin: "0 0 48px" }}>
              Fill this out and we'll come back with the right recommendation, a clear scope, and a proposal — no pressure, no guesswork.
            </p>
            <ProgressBar current={step} total={5} labels={STEP_LABELS} />
          </>
        )}

        {/* STEP CONTENT */}
        {step === 1 && <Step1 data={data} set={set} />}
        {step === 2 && <Step2 data={data} set={set} />}
        {step === 3 && <Step3 data={data} set={set} />}
        {step === 4 && <Step4 data={data} set={set} />}
        {step === 5 && <Step5 data={data} set={set} />}
        {step === 6 && <Success />}

        {/* CTA BAR */}
        {step < 6 && (
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "48px", paddingTop: "28px", borderTop: `0.5px solid ${C.border2}` }}>
            {step > 1 && <button style={base.btnBack} onClick={back}>← Back</button>}
            <button style={base.btnPrimary} onClick={step === 5 ? handleSubmit : next}>
              {step === 5 ? "Submit brief →" : "Continue →"}
            </button>
            <span style={{ fontSize: "12px", color: "#333", marginLeft: "auto" }}>Step {step} of 5</span>
          </div>
        )}

      </div>
    </div>
  );
}
