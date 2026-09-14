/* Architectural elevation SVGs for "Architecture Between Worlds".
   All drawings are line-art, in the spirit of architect's plates.
   Silk Road  → cream paper, dark ink (#3D3020 / #1A1108)
   Cold War   → dark ink ground, cream lines (#E8DECA / #DFC98A)
   Loaded as window.ARCH_SVGS and injected by an init script in the page. */
(function () {

  // ───────────────────────── PAGODA, full elevation ─────────────────────────
  // Used for case-study hero, comparison row, and lens "Form" view.
  // Wild Goose Pagoda: square 7-tier brick pagoda with curved Chinese eaves,
  // topped by Indian-stupa yasti pole + chattra discs (the hybrid signature).
  const PAGODA_ELEVATION = `
<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:100%;background:#E8DECA">
  <!-- corner crop marks -->
  <g stroke="#3D3020" stroke-width="0.7" fill="none">
    <path d="M10 18 L10 10 L18 10"/><path d="M290 18 L290 10 L282 10"/>
    <path d="M10 382 L10 390 L18 390"/><path d="M290 382 L290 390 L282 390"/>
  </g>
  <!-- title block -->
  <text x="150" y="22" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8" fill="#3D3020" letter-spacing="0.22em">PLATE I: ELEVATION, SOUTH</text>
  <text x="150" y="34" text-anchor="middle" font-family="Playfair Display,Georgia,serif" font-size="11" font-style="italic" fill="#1A1108">Giant Wild Goose Pagoda</text>
  <text x="150" y="46" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="7" fill="#6B5A42" letter-spacing="0.18em">XI'AN · 652 CE · TANG DYNASTY</text>
  <line x1="100" y1="52" x2="200" y2="52" stroke="#3D3020" stroke-width="0.6"/>
  <!-- Indian-stupa finial: yasti + 3 chattra discs (the imported element) -->
  <line x1="150" y1="62" x2="150" y2="92" stroke="#1A1108" stroke-width="1.1"/>
  <circle cx="150" cy="62" r="2.2" fill="#1A1108"/>
  <line x1="143" y1="74" x2="157" y2="74" stroke="#1A1108" stroke-width="1.4"/>
  <line x1="141" y1="80" x2="159" y2="80" stroke="#1A1108" stroke-width="1.2"/>
  <line x1="138" y1="86" x2="162" y2="86" stroke="#1A1108" stroke-width="1.05"/>
  <!-- annotation arrow for finial -->
  <line x1="178" y1="70" x2="240" y2="70" stroke="#3D3020" stroke-width="0.4"/>
  <text x="285" y="68" text-anchor="end" font-family="IBM Plex Mono,monospace" font-size="6.5" fill="#3D3020" letter-spacing="0.08em">YASTI + CHATTRA</text>
  <text x="285" y="76" text-anchor="end" font-family="Noto Serif,serif" font-size="6.5" font-style="italic" fill="#6B5A42">stupa origin</text>

  <!-- 7 tiers, bottom (largest) up. Each tier: roof + body + windows. -->
  <!-- Tier 7 (top) -->
  <path d="M132 96 L168 96 L172 92 L128 92 Z" fill="none" stroke="#1A1108" stroke-width="0.9"/>
  <path d="M128 92 L132 86 L168 86 L172 92" fill="none" stroke="#1A1108" stroke-width="0.9"/>
  <rect x="134" y="96" width="32" height="16" fill="none" stroke="#1A1108" stroke-width="0.85"/>
  <rect x="146" y="100" width="8" height="10" fill="none" stroke="#3D3020" stroke-width="0.6"/>
  <!-- Tier 6 -->
  <path d="M126 116 L174 116 L180 112 L120 112 Z" fill="none" stroke="#1A1108" stroke-width="0.9"/>
  <path d="M120 112 L126 106 L174 106 L180 112" fill="none" stroke="#1A1108" stroke-width="0.9"/>
  <rect x="128" y="116" width="44" height="18" fill="none" stroke="#1A1108" stroke-width="0.85"/>
  <rect x="142" y="120" width="6" height="10" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="152" y="120" width="6" height="10" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <!-- Tier 5 -->
  <path d="M118 138 L182 138 L190 134 L110 134 Z" fill="none" stroke="#1A1108" stroke-width="0.9"/>
  <path d="M110 134 L118 128 L182 128 L190 134" fill="none" stroke="#1A1108" stroke-width="0.9"/>
  <rect x="120" y="138" width="60" height="20" fill="none" stroke="#1A1108" stroke-width="0.85"/>
  <rect x="138" y="142" width="6" height="12" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="148" y="142" width="6" height="12" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="158" y="142" width="6" height="12" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <!-- Tier 4 -->
  <path d="M110 162 L190 162 L200 158 L100 158 Z" fill="none" stroke="#1A1108" stroke-width="0.9"/>
  <path d="M100 158 L110 152 L190 152 L200 158" fill="none" stroke="#1A1108" stroke-width="0.9"/>
  <rect x="112" y="162" width="76" height="22" fill="none" stroke="#1A1108" stroke-width="0.85"/>
  <rect x="132" y="166" width="6" height="14" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="142" y="166" width="6" height="14" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="152" y="166" width="6" height="14" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="162" y="166" width="6" height="14" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <!-- Tier 3 -->
  <path d="M102 188 L198 188 L208 184 L92 184 Z" fill="none" stroke="#1A1108" stroke-width="0.9"/>
  <path d="M92 184 L102 178 L198 178 L208 184" fill="none" stroke="#1A1108" stroke-width="0.9"/>
  <rect x="104" y="188" width="92" height="24" fill="none" stroke="#1A1108" stroke-width="0.85"/>
  <rect x="124" y="192" width="6" height="16" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="134" y="192" width="6" height="16" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="147" y="192" width="6" height="16" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="160" y="192" width="6" height="16" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="170" y="192" width="6" height="16" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <!-- Tier 2 -->
  <path d="M94 216 L206 216 L218 212 L82 212 Z" fill="none" stroke="#1A1108" stroke-width="0.9"/>
  <path d="M82 212 L94 206 L206 206 L218 212" fill="none" stroke="#1A1108" stroke-width="0.9"/>
  <rect x="96" y="216" width="108" height="26" fill="none" stroke="#1A1108" stroke-width="0.85"/>
  <rect x="118" y="220" width="6" height="18" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="128" y="220" width="6" height="18" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="138" y="220" width="6" height="18" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="152" y="220" width="6" height="18" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="166" y="220" width="6" height="18" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="176" y="220" width="6" height="18" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <!-- Tier 1 (largest) -->
  <path d="M86 246 L214 246 L226 242 L74 242 Z" fill="none" stroke="#1A1108" stroke-width="1"/>
  <path d="M74 242 L86 235 L214 235 L226 242" fill="none" stroke="#1A1108" stroke-width="1"/>
  <rect x="88" y="246" width="124" height="34" fill="none" stroke="#1A1108" stroke-width="1"/>
  <!-- central arched doorway -->
  <path d="M138 280 L138 262 Q150 252 162 262 L162 280" fill="none" stroke="#1A1108" stroke-width="0.9"/>
  <line x1="138" y1="262" x2="162" y2="262" stroke="#3D3020" stroke-width="0.3" stroke-dasharray="2 2"/>
  <!-- side windows -->
  <rect x="100" y="254" width="6" height="14" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="112" y="254" width="6" height="14" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="184" y="254" width="6" height="14" fill="none" stroke="#3D3020" stroke-width="0.5"/>
  <rect x="196" y="254" width="6" height="14" fill="none" stroke="#3D3020" stroke-width="0.5"/>

  <!-- Plinth / base -->
  <rect x="72" y="280" width="156" height="14" fill="none" stroke="#1A1108" stroke-width="1"/>
  <line x1="72" y1="286" x2="228" y2="286" stroke="#3D3020" stroke-width="0.4"/>
  <rect x="64" y="294" width="172" height="8" fill="none" stroke="#1A1108" stroke-width="1"/>

  <!-- Ground line + ground hatching -->
  <line x1="20" y1="302" x2="280" y2="302" stroke="#1A1108" stroke-width="1.1"/>
  <g stroke="#3D3020" stroke-width="0.35" opacity="0.55">
    <line x1="20" y1="302" x2="14" y2="312"/>
    <line x1="40" y1="302" x2="34" y2="312"/>
    <line x1="60" y1="302" x2="54" y2="312"/>
    <line x1="80" y1="302" x2="74" y2="312"/>
    <line x1="100" y1="302" x2="94" y2="312"/>
    <line x1="120" y1="302" x2="114" y2="312"/>
    <line x1="140" y1="302" x2="134" y2="312"/>
    <line x1="160" y1="302" x2="154" y2="312"/>
    <line x1="180" y1="302" x2="174" y2="312"/>
    <line x1="200" y1="302" x2="194" y2="312"/>
    <line x1="220" y1="302" x2="214" y2="312"/>
    <line x1="240" y1="302" x2="234" y2="312"/>
    <line x1="260" y1="302" x2="254" y2="312"/>
    <line x1="280" y1="302" x2="274" y2="312"/>
  </g>

  <!-- Right-edge dimension: total height 64m -->
  <line x1="246" y1="78" x2="246" y2="302" stroke="#3D3020" stroke-width="0.4"/>
  <line x1="242" y1="78" x2="250" y2="78" stroke="#3D3020" stroke-width="0.4"/>
  <line x1="242" y1="302" x2="250" y2="302" stroke="#3D3020" stroke-width="0.4"/>
  <text x="252" y="194" font-family="IBM Plex Mono,monospace" font-size="7" fill="#3D3020" letter-spacing="0.1em">64 m</text>
  <text x="252" y="204" font-family="IBM Plex Mono,monospace" font-size="6" fill="#6B5A42" letter-spacing="0.08em">(7 storeys)</text>

  <!-- Bottom title block / scale bar -->
  <line x1="20" y1="332" x2="280" y2="332" stroke="#3D3020" stroke-width="0.5"/>
  <text x="20" y="346" font-family="IBM Plex Mono,monospace" font-size="6.5" fill="#3D3020" letter-spacing="0.14em">DRAWN AFTER FIELD MEASUREMENT</text>
  <text x="20" y="358" font-family="IBM Plex Mono,monospace" font-size="6.5" fill="#6B5A42" letter-spacing="0.14em">BRICK · TIMBER LOGIC · SQUARE PLAN</text>
  <text x="280" y="346" text-anchor="end" font-family="IBM Plex Mono,monospace" font-size="7" fill="#3D3020" letter-spacing="0.16em">大雁塔</text>
  <text x="280" y="358" text-anchor="end" font-family="IBM Plex Mono,monospace" font-size="6" fill="#6B5A42" letter-spacing="0.16em">DÀ YÀN TĂ</text>
  <!-- scale bar -->
  <g transform="translate(110,370)">
    <rect x="0" y="0" width="20" height="3" fill="#1A1108"/>
    <rect x="20" y="0" width="20" height="3" fill="none" stroke="#1A1108" stroke-width="0.6"/>
    <rect x="40" y="0" width="20" height="3" fill="#1A1108"/>
    <rect x="60" y="0" width="20" height="3" fill="none" stroke="#1A1108" stroke-width="0.6"/>
    <text x="0" y="11" font-family="IBM Plex Mono,monospace" font-size="6" fill="#3D3020">0</text>
    <text x="80" y="11" text-anchor="end" font-family="IBM Plex Mono,monospace" font-size="6" fill="#3D3020">20 m</text>
  </g>

  <!-- compass -->
  <g transform="translate(40,80)">
    <circle r="11" fill="none" stroke="#3D3020" stroke-width="0.5"/>
    <line x1="0" y1="-11" x2="0" y2="11" stroke="#3D3020" stroke-width="0.5"/>
    <line x1="-11" y1="0" x2="11" y2="0" stroke="#3D3020" stroke-width="0.5"/>
    <polygon points="0,-11 -3,-3 3,-3" fill="#1A1108"/>
    <text x="0" y="-14" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="6" fill="#3D3020">N</text>
  </g>
</svg>`;

  // ───────────────────────── PALACE, full elevation ─────────────────────────
  const PALACE_ELEVATION = `
<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:100%;background:#0D0A05">
  <g stroke="#DFC98A" stroke-width="0.7" fill="none">
    <path d="M10 18 L10 10 L18 10"/><path d="M290 18 L290 10 L282 10"/>
    <path d="M10 382 L10 390 L18 390"/><path d="M290 382 L290 390 L282 390"/>
  </g>
  <text x="150" y="22" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8" fill="#DFC98A" letter-spacing="0.22em">PLATE II: ELEVATION, EAST</text>
  <text x="150" y="34" text-anchor="middle" font-family="Playfair Display,Georgia,serif" font-size="11" font-style="italic" fill="#E8DECA">Palace of Culture and Science</text>
  <text x="150" y="46" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="7" fill="#9A9488" letter-spacing="0.18em">WARSAW · 1955 · SOVIET-LED PROJECT</text>
  <line x1="100" y1="52" x2="200" y2="52" stroke="#DFC98A" stroke-width="0.6"/>

  <!-- Red star (one of only two colour accents) -->
  <polygon points="150,58 152.4,64.4 159,64.4 153.7,68 156,74.4 150,70.5 144,74.4 146.3,68 141,64.4 147.6,64.4"
           fill="#B5271B" opacity="0.95"/>
  <line x1="160" y1="68" x2="220" y2="68" stroke="#9A9488" stroke-width="0.35"/>
  <text x="285" y="66" text-anchor="end" font-family="IBM Plex Mono,monospace" font-size="6.5" fill="#DFC98A" letter-spacing="0.08em">SOVIET STAR</text>
  <text x="285" y="74" text-anchor="end" font-family="Noto Serif,serif" font-size="6.5" font-style="italic" fill="#9A9488">state symbol</text>

  <!-- Spire -->
  <line x1="150" y1="75" x2="150" y2="105" stroke="#E8DECA" stroke-width="1.2"/>
  <line x1="148" y1="105" x2="152" y2="105" stroke="#E8DECA" stroke-width="0.9"/>
  <!-- Spire tapered base -->
  <path d="M144 105 L156 105 L154 118 L146 118 Z" fill="none" stroke="#E8DECA" stroke-width="0.9"/>
  <path d="M142 118 L158 118 L156 130 L144 130 Z" fill="none" stroke="#E8DECA" stroke-width="0.9"/>

  <!-- Tier setbacks (wedding cake) -->
  <!-- Top tier -->
  <rect x="140" y="130" width="20" height="18" fill="none" stroke="#E8DECA" stroke-width="0.85"/>
  <line x1="140" y1="135" x2="160" y2="135" stroke="#9A9488" stroke-width="0.4"/>
  <line x1="140" y1="140" x2="160" y2="140" stroke="#9A9488" stroke-width="0.4"/>
  <line x1="140" y1="144" x2="160" y2="144" stroke="#9A9488" stroke-width="0.4"/>
  <!-- crown ornament -->
  <line x1="142" y1="130" x2="142" y2="125" stroke="#E8DECA" stroke-width="0.7"/>
  <line x1="150" y1="130" x2="150" y2="124" stroke="#E8DECA" stroke-width="0.7"/>
  <line x1="158" y1="130" x2="158" y2="125" stroke="#E8DECA" stroke-width="0.7"/>

  <!-- Tier 6 -->
  <rect x="132" y="148" width="36" height="20" fill="none" stroke="#E8DECA" stroke-width="0.85"/>
  <line x1="132" y1="154" x2="168" y2="154" stroke="#9A9488" stroke-width="0.4"/>
  <line x1="132" y1="160" x2="168" y2="160" stroke="#9A9488" stroke-width="0.4"/>
  <!-- Tier 5 -->
  <rect x="122" y="168" width="56" height="24" fill="none" stroke="#E8DECA" stroke-width="0.85"/>
  <g stroke="#9A9488" stroke-width="0.35">
    <line x1="124" y1="174" x2="176" y2="174"/>
    <line x1="124" y1="180" x2="176" y2="180"/>
    <line x1="124" y1="186" x2="176" y2="186"/>
  </g>
  <!-- corner pinnacles -->
  <line x1="122" y1="168" x2="122" y2="160" stroke="#E8DECA" stroke-width="0.7"/>
  <line x1="178" y1="168" x2="178" y2="160" stroke="#E8DECA" stroke-width="0.7"/>

  <!-- Tier 4 -->
  <rect x="110" y="192" width="80" height="32" fill="none" stroke="#E8DECA" stroke-width="0.85"/>
  <!-- vertical fluting -->
  <g stroke="#9A9488" stroke-width="0.3">
    <line x1="118" y1="194" x2="118" y2="222"/>
    <line x1="128" y1="194" x2="128" y2="222"/>
    <line x1="138" y1="194" x2="138" y2="222"/>
    <line x1="150" y1="194" x2="150" y2="222"/>
    <line x1="162" y1="194" x2="162" y2="222"/>
    <line x1="172" y1="194" x2="172" y2="222"/>
    <line x1="182" y1="194" x2="182" y2="222"/>
  </g>
  <!-- windows -->
  <g fill="none" stroke="#9A9488" stroke-width="0.45">
    <rect x="114" y="200" width="6" height="9"/>
    <rect x="124" y="200" width="6" height="9"/>
    <rect x="134" y="200" width="6" height="9"/>
    <rect x="146" y="200" width="6" height="9"/>
    <rect x="158" y="200" width="6" height="9"/>
    <rect x="170" y="200" width="6" height="9"/>
    <rect x="180" y="200" width="6" height="9"/>
  </g>

  <!-- Tier 3 -->
  <rect x="98" y="224" width="104" height="36" fill="none" stroke="#E8DECA" stroke-width="0.95"/>
  <g stroke="#9A9488" stroke-width="0.3">
    <line x1="106" y1="226" x2="106" y2="258"/>
    <line x1="118" y1="226" x2="118" y2="258"/>
    <line x1="130" y1="226" x2="130" y2="258"/>
    <line x1="142" y1="226" x2="142" y2="258"/>
    <line x1="158" y1="226" x2="158" y2="258"/>
    <line x1="170" y1="226" x2="170" y2="258"/>
    <line x1="182" y1="226" x2="182" y2="258"/>
    <line x1="194" y1="226" x2="194" y2="258"/>
  </g>
  <g fill="none" stroke="#9A9488" stroke-width="0.45">
    <rect x="102" y="234" width="6" height="11"/>
    <rect x="114" y="234" width="6" height="11"/>
    <rect x="126" y="234" width="6" height="11"/>
    <rect x="138" y="234" width="6" height="11"/>
    <rect x="154" y="234" width="6" height="11"/>
    <rect x="166" y="234" width="6" height="11"/>
    <rect x="178" y="234" width="6" height="11"/>
    <rect x="190" y="234" width="6" height="11"/>
  </g>

  <!-- Tier 2 (side wings extending) -->
  <rect x="80" y="260" width="140" height="34" fill="none" stroke="#E8DECA" stroke-width="0.95"/>
  <g stroke="#9A9488" stroke-width="0.3">
    <line x1="92" y1="262" x2="92" y2="292"/>
    <line x1="106" y1="262" x2="106" y2="292"/>
    <line x1="120" y1="262" x2="120" y2="292"/>
    <line x1="134" y1="262" x2="134" y2="292"/>
    <line x1="150" y1="262" x2="150" y2="292"/>
    <line x1="166" y1="262" x2="166" y2="292"/>
    <line x1="180" y1="262" x2="180" y2="292"/>
    <line x1="194" y1="262" x2="194" y2="292"/>
    <line x1="208" y1="262" x2="208" y2="292"/>
  </g>
  <g fill="none" stroke="#9A9488" stroke-width="0.45">
    <rect x="86" y="270" width="5" height="10"/>
    <rect x="98" y="270" width="5" height="10"/>
    <rect x="110" y="270" width="5" height="10"/>
    <rect x="124" y="270" width="5" height="10"/>
    <rect x="138" y="270" width="5" height="10"/>
    <rect x="156" y="270" width="5" height="10"/>
    <rect x="170" y="270" width="5" height="10"/>
    <rect x="184" y="270" width="5" height="10"/>
    <rect x="198" y="270" width="5" height="10"/>
    <rect x="210" y="270" width="5" height="10"/>
  </g>

  <!-- Tier 1 (broad base + entry portico) -->
  <rect x="62" y="294" width="176" height="20" fill="none" stroke="#E8DECA" stroke-width="1"/>
  <!-- portico arches -->
  <g fill="none" stroke="#9A9488" stroke-width="0.6">
    <path d="M76 314 L76 304 Q82 298 88 304 L88 314"/>
    <path d="M100 314 L100 304 Q106 298 112 304 L112 314"/>
    <path d="M124 314 L124 304 Q130 298 136 304 L136 314"/>
    <path d="M148 314 L148 302 Q156 296 164 302 L164 314"/>
    <path d="M172 314 L172 304 Q178 298 184 304 L184 314"/>
    <path d="M196 314 L196 304 Q202 298 208 304 L208 314"/>
    <path d="M220 314 L220 304 Q226 298 232 304 L232 314"/>
  </g>
  <!-- steps -->
  <rect x="54" y="314" width="192" height="3" fill="none" stroke="#E8DECA" stroke-width="0.7"/>
  <rect x="48" y="317" width="204" height="3" fill="none" stroke="#E8DECA" stroke-width="0.7"/>
  <rect x="42" y="320" width="216" height="3" fill="none" stroke="#E8DECA" stroke-width="0.7"/>

  <!-- Ground line + hatching -->
  <line x1="20" y1="323" x2="280" y2="323" stroke="#E8DECA" stroke-width="1.1"/>
  <g stroke="#9A9488" stroke-width="0.35" opacity="0.55">
    <line x1="20" y1="323" x2="14" y2="333"/>
    <line x1="40" y1="323" x2="34" y2="333"/>
    <line x1="60" y1="323" x2="54" y2="333"/>
    <line x1="80" y1="323" x2="74" y2="333"/>
    <line x1="100" y1="323" x2="94" y2="333"/>
    <line x1="120" y1="323" x2="114" y2="333"/>
    <line x1="140" y1="323" x2="134" y2="333"/>
    <line x1="160" y1="323" x2="154" y2="333"/>
    <line x1="180" y1="323" x2="174" y2="333"/>
    <line x1="200" y1="323" x2="194" y2="333"/>
    <line x1="220" y1="323" x2="214" y2="333"/>
    <line x1="240" y1="323" x2="234" y2="333"/>
    <line x1="260" y1="323" x2="254" y2="333"/>
    <line x1="280" y1="323" x2="274" y2="333"/>
  </g>

  <!-- Dimension on right -->
  <line x1="252" y1="58" x2="252" y2="323" stroke="#9A9488" stroke-width="0.4"/>
  <line x1="248" y1="58" x2="256" y2="58" stroke="#9A9488" stroke-width="0.4"/>
  <line x1="248" y1="323" x2="256" y2="323" stroke="#9A9488" stroke-width="0.4"/>
  <text x="258" y="194" font-family="IBM Plex Mono,monospace" font-size="7" fill="#DFC98A" letter-spacing="0.1em">237 m</text>
  <text x="258" y="204" font-family="IBM Plex Mono,monospace" font-size="6" fill="#9A9488" letter-spacing="0.08em">(42 storeys)</text>

  <!-- Bottom title block -->
  <line x1="20" y1="338" x2="280" y2="338" stroke="#9A9488" stroke-width="0.5"/>
  <text x="20" y="352" font-family="IBM Plex Mono,monospace" font-size="6.5" fill="#DFC98A" letter-spacing="0.14em">ARCHT. LEV RUDNEV (USSR)</text>
  <text x="20" y="364" font-family="IBM Plex Mono,monospace" font-size="6.5" fill="#9A9488" letter-spacing="0.14em">SOVIET AND POLISH LABOUR · OFFICIAL GIFT</text>
  <text x="280" y="352" text-anchor="end" font-family="IBM Plex Mono,monospace" font-size="7" fill="#DFC98A" letter-spacing="0.16em">PKiN</text>
  <text x="280" y="364" text-anchor="end" font-family="IBM Plex Mono,monospace" font-size="6" fill="#9A9488" letter-spacing="0.16em">PAŁAC KULTURY</text>
  <g transform="translate(110,374)">
    <rect x="0" y="0" width="20" height="3" fill="#E8DECA"/>
    <rect x="20" y="0" width="20" height="3" fill="none" stroke="#E8DECA" stroke-width="0.6"/>
    <rect x="40" y="0" width="20" height="3" fill="#E8DECA"/>
    <rect x="60" y="0" width="20" height="3" fill="none" stroke="#E8DECA" stroke-width="0.6"/>
    <text x="0" y="11" font-family="IBM Plex Mono,monospace" font-size="6" fill="#DFC98A">0</text>
    <text x="80" y="11" text-anchor="end" font-family="IBM Plex Mono,monospace" font-size="6" fill="#DFC98A">80 m</text>
  </g>

  <!-- compass -->
  <g transform="translate(40,80)">
    <circle r="11" fill="none" stroke="#9A9488" stroke-width="0.5"/>
    <line x1="0" y1="-11" x2="0" y2="11" stroke="#9A9488" stroke-width="0.5"/>
    <line x1="-11" y1="0" x2="11" y2="0" stroke="#9A9488" stroke-width="0.5"/>
    <polygon points="0,-11 -3,-3 3,-3" fill="#E8DECA"/>
    <text x="0" y="-14" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="6" fill="#DFC98A">N</text>
  </g>
</svg>`;

  // ── Pagoda silhouette helper (compact, for lens overlays + composites) ──
  // x,y is top-center of finial; scale 1.0 ≈ 120px tall × 100px wide
  function pagodaSilhouette(x, y, scale, stroke, sw) {
    const s = scale;
    const w = (n) => n * s;
    // Build path-only pagoda
    return `
<g transform="translate(${x},${y}) scale(${s})" stroke="${stroke}" fill="none" stroke-width="${sw / s}" stroke-linejoin="miter">
  <line x1="0" y1="0" x2="0" y2="14"/>
  <circle cx="0" cy="0" r="1.2" fill="${stroke}"/>
  <line x1="-3.5" y1="6" x2="3.5" y2="6"/>
  <line x1="-4" y1="10" x2="4" y2="10"/>
  <!-- t7 -->
  <path d="M-9 16 L9 16 L11 14 L-11 14 Z"/>
  <rect x="-8" y="16" width="16" height="8"/>
  <!-- t6 -->
  <path d="M-12 26 L12 26 L15 24 L-15 24 Z"/>
  <rect x="-11" y="26" width="22" height="10"/>
  <!-- t5 -->
  <path d="M-15 38 L15 38 L19 36 L-19 36 Z"/>
  <rect x="-14" y="38" width="28" height="12"/>
  <!-- t4 -->
  <path d="M-18 52 L18 52 L23 50 L-23 50 Z"/>
  <rect x="-17" y="52" width="34" height="14"/>
  <!-- t3 -->
  <path d="M-22 68 L22 68 L27 66 L-27 66 Z"/>
  <rect x="-21" y="68" width="42" height="16"/>
  <!-- t2 -->
  <path d="M-26 86 L26 86 L31 84 L-31 84 Z"/>
  <rect x="-25" y="86" width="50" height="18"/>
  <!-- t1 (base) -->
  <path d="M-30 106 L30 106 L36 104 L-36 104 Z"/>
  <rect x="-29" y="106" width="58" height="22"/>
  <!-- entry -->
  <path d="M-5 128 L-5 116 Q0 110 5 116 L5 128"/>
  <!-- plinth -->
  <rect x="-32" y="128" width="64" height="6"/>
</g>`;
  }

  // ── Palace silhouette helper (compact wedding-cake) ──
  function palaceSilhouette(x, y, scale, stroke, sw) {
    const s = scale;
    return `
<g transform="translate(${x},${y}) scale(${s})" stroke="${stroke}" fill="none" stroke-width="${sw / s}" stroke-linejoin="miter">
  <!-- broad podium and side wings -->
  <rect x="-46" y="125" width="92" height="25"/>
  <rect x="-38" y="111" width="76" height="14"/>
  <rect x="-30" y="99" width="60" height="12"/>
  <rect x="-52" y="135" width="18" height="15"/>
  <rect x="34" y="135" width="18" height="15"/>
  <path d="M-56 150 L56 150"/>
  <path d="M-48 139 L48 139"/>

  <!-- tall central shaft with shoulders -->
  <rect x="-21" y="54" width="42" height="96"/>
  <rect x="-16" y="40" width="32" height="14"/>
  <rect x="-11" y="27" width="22" height="13"/>
  <path d="M-17 54 L-25 70 L-25 99"/>
  <path d="M17 54 L25 70 L25 99"/>
  <path d="M-21 73 L21 73"/>
  <path d="M-25 99 L25 99"/>

  <!-- crown, clock zone, and needle spire -->
  <path d="M-12 27 L0 12 L12 27"/>
  <line x1="0" y1="12" x2="0" y2="0"/>
  <line x1="-5" y1="17" x2="5" y2="17"/>
  <circle cx="0" cy="0" r="1.3" fill="${stroke}" stroke="none"/>
  <circle cx="0" cy="49" r="4.2"/>
  <line x1="0" y1="46" x2="0" y2="49"/>
  <line x1="0" y1="49" x2="3" y2="49"/>

  <!-- vertical window bands and horizontal registers -->
  <g opacity="0.72">
    <line x1="-14" y1="60" x2="-14" y2="144"/>
    <line x1="-7" y1="60" x2="-7" y2="144"/>
    <line x1="0" y1="60" x2="0" y2="144"/>
    <line x1="7" y1="60" x2="7" y2="144"/>
    <line x1="14" y1="60" x2="14" y2="144"/>
    <line x1="-20" y1="84" x2="20" y2="84"/>
    <line x1="-20" y1="96" x2="20" y2="96"/>
    <line x1="-20" y1="108" x2="20" y2="108"/>
    <line x1="-20" y1="120" x2="20" y2="120"/>
    <line x1="-20" y1="132" x2="20" y2="132"/>
    <line x1="-34" y1="116" x2="34" y2="116"/>
    <line x1="-40" y1="131" x2="40" y2="131"/>
  </g>

  <!-- small historicist pinnacles -->
  <g opacity="0.85">
    <line x1="-24" y1="70" x2="-24" y2="62"/>
    <line x1="24" y1="70" x2="24" y2="62"/>
    <line x1="-16" y1="40" x2="-16" y2="33"/>
    <line x1="16" y1="40" x2="16" y2="33"/>
    <line x1="-10" y1="27" x2="-10" y2="21"/>
    <line x1="10" y1="27" x2="10" y2="21"/>
  </g>
</g>`;
  }

  // ── PAGODA, AGENCY (Xuanzang the monk arriving with scrolls) ──
  const PAGODA_AGENCY = `
<svg viewBox="0 0 320 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:100%;background:#E8DECA">
  <g stroke="#3D3020" stroke-width="0.6" fill="none">
    <path d="M10 18 L10 10 L18 10"/><path d="M310 18 L310 10 L302 10"/>
    <path d="M10 382 L10 390 L18 390"/><path d="M310 382 L310 390 L302 390"/>
  </g>
  <text x="160" y="22" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8" fill="#3D3020" letter-spacing="0.22em">AGENCY · WHO ACTED</text>
  <text x="160" y="34" text-anchor="middle" font-family="Playfair Display,Georgia,serif" font-size="10" font-style="italic" fill="#1A1108">Pilgrimage, patronage, translation</text>
  <line x1="120" y1="40" x2="200" y2="40" stroke="#3D3020" stroke-width="0.5"/>

  <!-- distant horizon hatching -->
  <line x1="20" y1="200" x2="300" y2="200" stroke="#6B5A42" stroke-width="0.35"/>
  <g stroke="#6B5A42" stroke-width="0.3" opacity="0.5">
    <line x1="40" y1="200" x2="50" y2="190"/>
    <line x1="80" y1="200" x2="90" y2="192"/>
    <line x1="240" y1="200" x2="248" y2="192"/>
    <line x1="278" y1="200" x2="288" y2="190"/>
  </g>

  <!-- Pagoda (centered, large) -->
  ${pagodaSilhouette(200, 60, 1.45, '#1A1108', 0.95)}

  <!-- Ground line -->
  <line x1="20" y1="320" x2="300" y2="320" stroke="#1A1108" stroke-width="1"/>
  <g stroke="#3D3020" stroke-width="0.3" opacity="0.5">
    <line x1="20" y1="320" x2="14" y2="330"/>
    <line x1="60" y1="320" x2="54" y2="330"/>
    <line x1="100" y1="320" x2="94" y2="330"/>
    <line x1="140" y1="320" x2="134" y2="330"/>
    <line x1="180" y1="320" x2="174" y2="330"/>
    <line x1="220" y1="320" x2="214" y2="330"/>
    <line x1="260" y1="320" x2="254" y2="330"/>
    <line x1="300" y1="320" x2="294" y2="330"/>
  </g>

  <!-- path/road -->
  <path d="M30 320 Q70 322 110 320 Q150 318 190 320" fill="none" stroke="#6B5A42" stroke-width="0.5" stroke-dasharray="3 3" opacity="0.6"/>

  <!-- Xuanzang monk figure (foreground, walking right toward pagoda) -->
  <g transform="translate(70,290)" stroke="#1A1108" fill="none" stroke-width="0.9" stroke-linecap="round">
    <!-- backpack of scrolls (the SUTRAS he carried back) -->
    <rect x="-9" y="-4" width="11" height="18" fill="#3D3020"/>
    <line x1="-9" y1="0" x2="2" y2="0" stroke="#E8DECA" stroke-width="0.5"/>
    <line x1="-9" y1="4" x2="2" y2="4" stroke="#E8DECA" stroke-width="0.5"/>
    <line x1="-9" y1="8" x2="2" y2="8" stroke="#E8DECA" stroke-width="0.5"/>
    <!-- scroll tops sticking out -->
    <line x1="-7" y1="-4" x2="-7" y2="-9" stroke="#1A1108" stroke-width="0.8"/>
    <line x1="-3" y1="-4" x2="-3" y2="-10" stroke="#1A1108" stroke-width="0.8"/>
    <line x1="1" y1="-4" x2="1" y2="-9" stroke="#1A1108" stroke-width="0.8"/>
    <!-- body -->
    <ellipse cx="4" cy="-2" rx="3.2" ry="3.6" fill="#3D3020" stroke="#1A1108"/>
    <path d="M2 1 L2 20 L10 20" fill="none" stroke="#1A1108" stroke-width="1.1"/>
    <path d="M8 20 L8 28 L6 32"/>
    <path d="M10 20 L12 28 L11 32"/>
    <!-- walking staff -->
    <line x1="12" y1="-6" x2="14" y2="30" stroke="#1A1108" stroke-width="0.9"/>
    <circle cx="13" cy="-7" r="1.2" fill="#1A1108"/>
  </g>
  <line x1="62" y1="266" x2="54" y2="248" stroke="#3D3020" stroke-width="0.35"/>
  <text x="56" y="244" text-anchor="start" font-family="IBM Plex Mono,monospace" font-size="6" fill="#3D3020" letter-spacing="0.08em">XUANZANG</text>
  <text x="56" y="253" text-anchor="start" font-family="Noto Serif,serif" font-size="6.2" font-style="italic" fill="#6B5A42">returned 645 CE</text>

  <!-- camels in distance (caravan that brought the form) -->
  <g stroke="#6B5A42" fill="none" stroke-width="0.5" opacity="0.7">
    <ellipse cx="260" cy="312" rx="6" ry="2.5"/>
    <ellipse cx="260" cy="307" rx="2" ry="2"/>
    <line x1="256" y1="314" x2="255" y2="318"/>
    <line x1="259" y1="314" x2="258" y2="318"/>
    <line x1="262" y1="314" x2="261" y2="318"/>
    <line x1="265" y1="314" x2="264" y2="318"/>
    <ellipse cx="275" cy="313" rx="5" ry="2"/>
    <ellipse cx="275" cy="309" rx="1.7" ry="1.7"/>
    <line x1="272" y1="314" x2="271" y2="318"/>
    <line x1="277" y1="314" x2="276" y2="318"/>
  </g>

  <!-- bottom note -->
  <line x1="20" y1="346" x2="300" y2="346" stroke="#3D3020" stroke-width="0.4"/>
  <text x="20" y="360" font-family="IBM Plex Mono,monospace" font-size="6.3" fill="#3D3020" letter-spacing="0.1em">MONASTIC NETWORKS · LOCAL BUILDERS · TANG PATRONAGE</text>
  <text x="20" y="370" font-family="IBM Plex Mono,monospace" font-size="6.3" fill="#6B5A42" letter-spacing="0.1em">RELIGIOUS TRANSFER SHAPED BY POLITICAL CONTEXT</text>
</svg>`;

  // ── PAGODA, FORM (clean elevation + ghosted Indian stupa for comparison) ──
  const PAGODA_FORM = `
<svg viewBox="0 0 320 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:100%;background:#E8DECA">
  <g stroke="#3D3020" stroke-width="0.6" fill="none">
    <path d="M10 18 L10 10 L18 10"/><path d="M310 18 L310 10 L302 10"/>
    <path d="M10 382 L10 390 L18 390"/><path d="M310 382 L310 390 L302 390"/>
  </g>
  <text x="160" y="22" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8" fill="#3D3020" letter-spacing="0.22em">FORM · WHAT WAS MADE</text>
  <text x="160" y="34" text-anchor="middle" font-family="Playfair Display,Georgia,serif" font-size="10" font-style="italic" fill="#1A1108">A third architectural thing</text>
  <line x1="120" y1="40" x2="200" y2="40" stroke="#3D3020" stroke-width="0.5"/>

  <!-- Ghosted Indian stupa, left -->
  <g opacity="0.32" stroke="#3D3020" fill="none" stroke-width="0.8">
    <!-- dome -->
    <ellipse cx="70" cy="190" rx="32" ry="22"/>
    <!-- drum -->
    <rect x="40" y="212" width="60" height="10"/>
    <!-- base -->
    <rect x="34" y="222" width="72" height="6"/>
    <!-- harmika -->
    <rect x="62" y="166" width="16" height="10"/>
    <!-- yasti + chattras -->
    <line x1="70" y1="166" x2="70" y2="138" stroke-width="1.1"/>
    <line x1="63" y1="148" x2="77" y2="148" stroke-width="1.3"/>
    <line x1="61" y1="142" x2="79" y2="142" stroke-width="1.1"/>
    <line x1="59" y1="138" x2="81" y2="138" stroke-width="0.9"/>
  </g>
  <text x="70" y="248" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="7" fill="#6B5A42" letter-spacing="0.14em" opacity="0.7">STUPA · INDIA</text>
  <text x="70" y="258" text-anchor="middle" font-family="Noto Serif,serif" font-size="7" font-style="italic" fill="#6B5A42" opacity="0.7">solid hemisphere</text>

  <!-- Translation arrow -->
  <line x1="115" y1="180" x2="155" y2="180" stroke="#1A1108" stroke-width="0.8"/>
  <polygon points="155,180 149,177 149,183" fill="#1A1108"/>
  <text x="135" y="172" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="6" fill="#3D3020" letter-spacing="0.15em">TRANSLATED</text>
  <text x="135" y="194" text-anchor="middle" font-family="Noto Serif,serif" font-size="6.5" font-style="italic" fill="#6B5A42">into Chinese masonry</text>

  <!-- Pagoda on the right -->
  ${pagodaSilhouette(225, 75, 1.3, '#1A1108', 0.95)}

  <!-- Ground -->
  <line x1="20" y1="320" x2="300" y2="320" stroke="#1A1108" stroke-width="0.9"/>
  <g stroke="#3D3020" stroke-width="0.3" opacity="0.5">
    <line x1="20" y1="320" x2="14" y2="330"/>
    <line x1="60" y1="320" x2="54" y2="330"/>
    <line x1="100" y1="320" x2="94" y2="330"/>
    <line x1="140" y1="320" x2="134" y2="330"/>
    <line x1="180" y1="320" x2="174" y2="330"/>
    <line x1="220" y1="320" x2="214" y2="330"/>
    <line x1="260" y1="320" x2="254" y2="330"/>
    <line x1="300" y1="320" x2="294" y2="330"/>
  </g>

  <!-- Annotation -->
  <line x1="275" y1="100" x2="295" y2="92" stroke="#3D3020" stroke-width="0.4"/>
  <text x="295" y="86" text-anchor="end" font-family="IBM Plex Mono,monospace" font-size="6" fill="#3D3020" letter-spacing="0.1em">INDIAN YASTI</text>
  <text x="295" y="94" text-anchor="end" font-family="Noto Serif,serif" font-size="6" font-style="italic" fill="#6B5A42">preserved on top</text>

  <line x1="260" y1="190" x2="295" y2="180" stroke="#3D3020" stroke-width="0.4"/>
  <text x="295" y="174" text-anchor="end" font-family="IBM Plex Mono,monospace" font-size="6" fill="#3D3020" letter-spacing="0.1em">CHINESE EAVES</text>
  <text x="295" y="182" text-anchor="end" font-family="Noto Serif,serif" font-size="6" font-style="italic" fill="#6B5A42">timber-frame logic</text>

  <line x1="260" y1="275" x2="295" y2="282" stroke="#3D3020" stroke-width="0.4"/>
  <text x="295" y="288" text-anchor="end" font-family="IBM Plex Mono,monospace" font-size="6" fill="#3D3020" letter-spacing="0.1em">BRICK MASONRY</text>
  <text x="295" y="296" text-anchor="end" font-family="Noto Serif,serif" font-size="6" font-style="italic" fill="#6B5A42">Chinese local craft</text>

  <line x1="20" y1="346" x2="300" y2="346" stroke="#3D3020" stroke-width="0.4"/>
  <text x="20" y="360" font-family="IBM Plex Mono,monospace" font-size="6.5" fill="#3D3020" letter-spacing="0.14em">HYBRID · NEITHER INDIAN NOR CHINESE</text>
  <text x="20" y="370" font-family="IBM Plex Mono,monospace" font-size="6.5" fill="#6B5A42" letter-spacing="0.14em">A FORM NEITHER TRADITION COULD HAVE MADE ALONE</text>
</svg>`;

  // ── PAGODA, LEGACY (pagoda in temple compound, civic emblem) ──
  const PAGODA_LEGACY = `
<svg viewBox="0 0 320 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:100%;background:#E8DECA">
  <g stroke="#3D3020" stroke-width="0.6" fill="none">
    <path d="M10 18 L10 10 L18 10"/><path d="M310 18 L310 10 L302 10"/>
    <path d="M10 382 L10 390 L18 390"/><path d="M310 382 L310 390 L302 390"/>
  </g>
  <text x="160" y="22" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8" fill="#3D3020" letter-spacing="0.22em">LEGACY · WHAT STUCK</text>
  <text x="160" y="34" text-anchor="middle" font-family="Playfair Display,Georgia,serif" font-size="10" font-style="italic" fill="#1A1108">Layered memory over time</text>
  <line x1="120" y1="40" x2="200" y2="40" stroke="#3D3020" stroke-width="0.5"/>

  <!-- Pagoda (center) -->
  ${pagodaSilhouette(160, 70, 1.4, '#1A1108', 0.95)}

  <!-- Side temple buildings (Daci'en compound) -->
  <g stroke="#3D3020" fill="none" stroke-width="0.6" opacity="0.85">
    <!-- left hall -->
    <rect x="30" y="240" width="70" height="32"/>
    <path d="M26 240 L34 232 L96 232 L104 240" />
    <path d="M22 232 L34 224 L96 224 L108 232" stroke-width="0.7"/>
    <rect x="40" y="250" width="8" height="18"/>
    <rect x="55" y="250" width="8" height="18"/>
    <rect x="70" y="250" width="8" height="18"/>
    <rect x="85" y="250" width="8" height="18"/>
    <!-- right hall -->
    <rect x="220" y="240" width="70" height="32"/>
    <path d="M216 240 L224 232 L286 232 L294 240" />
    <path d="M212 232 L224 224 L286 224 L298 232" stroke-width="0.7"/>
    <rect x="230" y="250" width="8" height="18"/>
    <rect x="245" y="250" width="8" height="18"/>
    <rect x="260" y="250" width="8" height="18"/>
    <rect x="275" y="250" width="8" height="18"/>
  </g>

  <!-- Trees (cypresses) -->
  <g stroke="#3D3020" fill="none" stroke-width="0.5">
    <ellipse cx="118" cy="260" rx="4" ry="10"/>
    <line x1="118" y1="265" x2="118" y2="276"/>
    <ellipse cx="200" cy="260" rx="4" ry="10"/>
    <line x1="200" y1="265" x2="200" y2="276"/>
  </g>

  <!-- Ground / paved courtyard -->
  <line x1="20" y1="278" x2="300" y2="278" stroke="#1A1108" stroke-width="0.9"/>
  <g stroke="#3D3020" stroke-width="0.25" opacity="0.4">
    <line x1="20" y1="278" x2="20" y2="320"/>
    <line x1="60" y1="278" x2="60" y2="320"/>
    <line x1="100" y1="278" x2="100" y2="320"/>
    <line x1="140" y1="278" x2="140" y2="320"/>
    <line x1="180" y1="278" x2="180" y2="320"/>
    <line x1="220" y1="278" x2="220" y2="320"/>
    <line x1="260" y1="278" x2="260" y2="320"/>
    <line x1="300" y1="278" x2="300" y2="320"/>
    <line x1="20" y1="290" x2="300" y2="290"/>
    <line x1="20" y1="305" x2="300" y2="305"/>
    <line x1="20" y1="320" x2="300" y2="320"/>
  </g>

  <!-- Tiny tourist silhouettes in courtyard -->
  <g fill="#3D3020">
    <circle cx="142" cy="298" r="1.2"/><rect x="141" y="299" width="2" height="6"/>
    <circle cx="150" cy="300" r="1.2"/><rect x="149" y="301" width="2" height="6"/>
    <circle cx="158" cy="298" r="1.2"/><rect x="157" y="299" width="2" height="6"/>
    <circle cx="174" cy="300" r="1.2"/><rect x="173" y="301" width="2" height="6"/>
    <circle cx="190" cy="296" r="1.2"/><rect x="189" y="297" width="2" height="6"/>
    <circle cx="78" cy="296" r="1.2"/><rect x="77" y="297" width="2" height="6"/>
    <circle cx="240" cy="298" r="1.2"/><rect x="239" y="299" width="2" height="6"/>
    <circle cx="252" cy="296" r="1.2"/><rect x="251" y="297" width="2" height="6"/>
  </g>

  <!-- Annotation: city emblem -->
  <g transform="translate(268,92)">
    <circle r="14" fill="none" stroke="#3D3020" stroke-width="0.8"/>
    <circle r="11" fill="none" stroke="#3D3020" stroke-width="0.4"/>
    ${pagodaSilhouette(0, -7, 0.18, '#1A1108', 1.2)}
  </g>
  <text x="268" y="122" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="4.8" fill="#3D3020" letter-spacing="0.08em">XI'AN CIVIC</text>
  <text x="268" y="129" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="4.8" fill="#3D3020" letter-spacing="0.08em">MEMORY</text>

  <line x1="20" y1="346" x2="300" y2="346" stroke="#3D3020" stroke-width="0.4"/>
  <text x="20" y="360" font-family="IBM Plex Mono,monospace" font-size="6.3" fill="#3D3020" letter-spacing="0.1em">LOCAL LANDMARK · BUDDHIST PILGRIMAGE · CIVIC IMAGE</text>
  <text x="20" y="370" font-family="IBM Plex Mono,monospace" font-size="6.3" fill="#6B5A42" letter-spacing="0.1em">CHINESE MEMORY WITH TRANSREGIONAL ORIGINS</text>
</svg>`;

  // ── PALACE, AGENCY (with Soviet workers, crane, "gift" banner) ──
  const PALACE_AGENCY = `
<svg viewBox="0 0 320 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:100%;background:#0D0A05">
  <g stroke="#DFC98A" stroke-width="0.6" fill="none">
    <path d="M10 18 L10 10 L18 10"/><path d="M310 18 L310 10 L302 10"/>
    <path d="M10 382 L10 390 L18 390"/><path d="M310 382 L310 390 L302 390"/>
  </g>
  <text x="160" y="22" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8" fill="#DFC98A" letter-spacing="0.22em">AGENCY · WHO ACTED</text>
  <text x="160" y="34" text-anchor="middle" font-family="Playfair Display,Georgia,serif" font-size="10" font-style="italic" fill="#E8DECA">State planning, local participation</text>
  <line x1="120" y1="40" x2="200" y2="40" stroke="#DFC98A" stroke-width="0.5"/>

  <!-- Palace centered -->
  ${palaceSilhouette(190, 60, 1.4, '#E8DECA', 0.9)}

  <!-- Construction crane (left side, lattice) -->
  <g stroke="#9A9488" fill="none" stroke-width="0.7">
    <!-- vertical mast -->
    <line x1="60" y1="100" x2="60" y2="320"/>
    <line x1="66" y1="100" x2="66" y2="320"/>
    <line x1="60" y1="120" x2="66" y2="130"/>
    <line x1="66" y1="120" x2="60" y2="130"/>
    <line x1="60" y1="140" x2="66" y2="150"/>
    <line x1="66" y1="140" x2="60" y2="150"/>
    <line x1="60" y1="160" x2="66" y2="170"/>
    <line x1="66" y1="160" x2="60" y2="170"/>
    <line x1="60" y1="180" x2="66" y2="190"/>
    <line x1="66" y1="180" x2="60" y2="190"/>
    <line x1="60" y1="200" x2="66" y2="210"/>
    <line x1="66" y1="200" x2="60" y2="210"/>
    <line x1="60" y1="220" x2="66" y2="230"/>
    <line x1="66" y1="220" x2="60" y2="230"/>
    <line x1="60" y1="240" x2="66" y2="250"/>
    <line x1="66" y1="240" x2="60" y2="250"/>
    <!-- horizontal jib -->
    <line x1="34" y1="105" x2="120" y2="105"/>
    <line x1="34" y1="111" x2="120" y2="111"/>
    <line x1="40" y1="105" x2="46" y2="111"/>
    <line x1="46" y1="105" x2="52" y2="111"/>
    <line x1="52" y1="105" x2="58" y2="111"/>
    <line x1="72" y1="105" x2="78" y2="111"/>
    <line x1="78" y1="105" x2="84" y2="111"/>
    <line x1="84" y1="105" x2="90" y2="111"/>
    <line x1="90" y1="105" x2="96" y2="111"/>
    <line x1="96" y1="105" x2="102" y2="111"/>
    <line x1="102" y1="105" x2="108" y2="111"/>
    <line x1="108" y1="105" x2="114" y2="111"/>
    <!-- support cables -->
    <line x1="63" y1="92" x2="34" y2="111"/>
    <line x1="63" y1="92" x2="120" y2="111"/>
    <!-- counterweight -->
    <rect x="30" y="100" width="8" height="14" fill="#9A9488" opacity="0.4"/>
    <!-- hook hanging from end -->
    <line x1="115" y1="111" x2="115" y2="170"/>
    <circle cx="115" cy="174" r="2.5"/>
  </g>

  <!-- "GIFT FROM USSR" banner stretched -->
  <g>
    <rect x="130" y="290" width="160" height="14" fill="none" stroke="#B5271B" stroke-width="0.9"/>
    <line x1="130" y1="285" x2="130" y2="310" stroke="#9A9488" stroke-width="0.5"/>
    <line x1="290" y1="285" x2="290" y2="310" stroke="#9A9488" stroke-width="0.5"/>
    <text x="210" y="300" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8" fill="#B5271B" letter-spacing="0.16em">OFFICIAL SOVIET GIFT</text>
  </g>

  <!-- Soviet workers in foreground (silhouettes) -->
  <g fill="#E8DECA" stroke="#DFC98A" stroke-width="0.4">
    <!-- worker 1 -->
    <circle cx="98" cy="324" r="2.5"/>
    <rect x="96" y="326" width="4" height="10"/>
    <line x1="96" y1="336" x2="93" y2="346" stroke="#E8DECA" stroke-width="0.8"/>
    <line x1="100" y1="336" x2="103" y2="346" stroke="#E8DECA" stroke-width="0.8"/>
    <line x1="94" y1="330" x2="88" y2="328" stroke="#E8DECA" stroke-width="0.7"/>
    <!-- worker 2 (with shovel) -->
    <circle cx="120" cy="324" r="2.5"/>
    <rect x="118" y="326" width="4" height="10"/>
    <line x1="118" y1="336" x2="115" y2="346" stroke="#E8DECA" stroke-width="0.8"/>
    <line x1="122" y1="336" x2="125" y2="346" stroke="#E8DECA" stroke-width="0.8"/>
    <line x1="123" y1="328" x2="132" y2="318" stroke="#E8DECA" stroke-width="0.8"/>
    <rect x="131" y="315" width="4" height="5" fill="#E8DECA"/>
    <!-- worker 3 -->
    <circle cx="270" cy="324" r="2.5"/>
    <rect x="268" y="326" width="4" height="10"/>
    <line x1="268" y1="336" x2="265" y2="346" stroke="#E8DECA" stroke-width="0.8"/>
    <line x1="272" y1="336" x2="275" y2="346" stroke="#E8DECA" stroke-width="0.8"/>
  </g>

  <!-- Ground line -->
  <line x1="20" y1="346" x2="300" y2="346" stroke="#E8DECA" stroke-width="0.9"/>

  <line x1="20" y1="358" x2="300" y2="358" stroke="#9A9488" stroke-width="0.4"/>
  <text x="20" y="370" font-family="IBM Plex Mono,monospace" font-size="6.3" fill="#DFC98A" letter-spacing="0.1em">SOVIET-LED PROJECT · POLISH LABOUR AND INPUT</text>
  <text x="20" y="380" font-family="IBM Plex Mono,monospace" font-size="6.3" fill="#9A9488" letter-spacing="0.1em">AUTHORED UNDER UNEQUAL POLITICAL CONDITIONS</text>
</svg>`;

  // ── PALACE, FORM (with Moscow Seven Sisters ghosted) ──
  const PALACE_FORM = `
<svg viewBox="0 0 320 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:100%;background:#0D0A05">
  <g stroke="#DFC98A" stroke-width="0.6" fill="none">
    <path d="M10 18 L10 10 L18 10"/><path d="M310 18 L310 10 L302 10"/>
    <path d="M10 382 L10 390 L18 390"/><path d="M310 382 L310 390 L302 390"/>
  </g>
  <text x="160" y="22" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8" fill="#DFC98A" letter-spacing="0.22em">FORM · WHAT WAS MADE</text>
  <text x="160" y="34" text-anchor="middle" font-family="Playfair Display,Georgia,serif" font-size="10" font-style="italic" fill="#E8DECA">Soviet type, Polish references</text>
  <line x1="120" y1="40" x2="200" y2="40" stroke="#DFC98A" stroke-width="0.5"/>

  <!-- Ghosted Moscow tower (left) -->
  <g opacity="0.32">
    ${palaceSilhouette(70, 100, 1.0, '#9A9488', 0.7)}
  </g>
  <text x="70" y="260" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="7" fill="#9A9488" letter-spacing="0.14em" opacity="0.85">MOSCOW · 1953</text>
  <text x="70" y="270" text-anchor="middle" font-family="Noto Serif,serif" font-size="7" font-style="italic" fill="#9A9488" opacity="0.85">related high-rise type</text>

  <!-- = sign -->
  <line x1="118" y1="195" x2="148" y2="195" stroke="#DFC98A" stroke-width="1.4"/>
  <line x1="118" y1="205" x2="148" y2="205" stroke="#DFC98A" stroke-width="1.4"/>
  <text x="133" y="186" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="6" fill="#DFC98A" letter-spacing="0.12em">RELATED</text>
  <text x="133" y="220" text-anchor="middle" font-family="Noto Serif,serif" font-size="6.5" font-style="italic" fill="#9A9488">adapted in Warsaw</text>

  <!-- Warsaw palace (right) -->
  ${palaceSilhouette(225, 80, 1.25, '#E8DECA', 0.9)}

  <!-- Ground -->
  <line x1="20" y1="320" x2="300" y2="320" stroke="#E8DECA" stroke-width="0.9"/>

  <!-- Annotations -->
  <line x1="265" y1="120" x2="295" y2="110" stroke="#9A9488" stroke-width="0.4"/>
  <text x="295" y="104" text-anchor="end" font-family="IBM Plex Mono,monospace" font-size="6" fill="#DFC98A" letter-spacing="0.1em">SPIRE</text>
  <text x="295" y="112" text-anchor="end" font-family="Noto Serif,serif" font-size="6" font-style="italic" fill="#9A9488">Soviet lineage</text>

  <line x1="265" y1="200" x2="295" y2="194" stroke="#9A9488" stroke-width="0.4"/>
  <text x="295" y="188" text-anchor="end" font-family="IBM Plex Mono,monospace" font-size="6" fill="#DFC98A" letter-spacing="0.1em">WEDDING CAKE</text>
  <text x="295" y="196" text-anchor="end" font-family="Noto Serif,serif" font-size="6" font-style="italic" fill="#9A9488">Stalinist setbacks</text>

  <line x1="265" y1="270" x2="295" y2="278" stroke="#9A9488" stroke-width="0.4"/>
  <text x="295" y="284" text-anchor="end" font-family="IBM Plex Mono,monospace" font-size="6" fill="#DFC98A" letter-spacing="0.1em">POLISH GOTHIC TRIM</text>
  <text x="295" y="292" text-anchor="end" font-family="Noto Serif,serif" font-size="6" font-style="italic" fill="#9A9488">local references</text>

  <line x1="20" y1="346" x2="300" y2="346" stroke="#9A9488" stroke-width="0.4"/>
  <text x="20" y="360" font-family="IBM Plex Mono,monospace" font-size="6.3" fill="#DFC98A" letter-spacing="0.1em">STALINIST HIGH-RISE TYPE · WARSAW ADAPTATION</text>
  <text x="20" y="370" font-family="IBM Plex Mono,monospace" font-size="6.3" fill="#9A9488" letter-spacing="0.1em">STEPPED MASSING WITH POLISH HISTORICIST DETAILS</text>
</svg>`;

  // ── PALACE, LEGACY (with hostile plaza, parking, graffiti) ──
  const PALACE_LEGACY = `
<svg viewBox="0 0 320 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:100%;background:#0D0A05">
  <g stroke="#DFC98A" stroke-width="0.6" fill="none">
    <path d="M10 18 L10 10 L18 10"/><path d="M310 18 L310 10 L302 10"/>
    <path d="M10 382 L10 390 L18 390"/><path d="M310 382 L310 390 L302 390"/>
  </g>
  <text x="160" y="22" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8" fill="#DFC98A" letter-spacing="0.22em">LEGACY · WHAT STUCK</text>
  <text x="160" y="34" text-anchor="middle" font-family="Playfair Display,Georgia,serif" font-size="10" font-style="italic" fill="#E8DECA">Contested urban memory</text>
  <line x1="120" y1="40" x2="200" y2="40" stroke="#DFC98A" stroke-width="0.5"/>

  <!-- Palace -->
  ${palaceSilhouette(160, 60, 1.4, '#E8DECA', 0.9)}

  <!-- "DEMOLISH?" graffiti / banner -->
  <g>
    <rect x="226" y="180" width="76" height="16" fill="none" stroke="#B5271B" stroke-width="1"/>
    <line x1="226" y1="178" x2="222" y2="170" stroke="#B5271B" stroke-width="0.8"/>
    <text x="264" y="191" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8" fill="#B5271B" letter-spacing="0.12em">CONTESTED</text>
    <text x="264" y="207" text-anchor="middle" font-family="Noto Serif,serif" font-size="6.5" font-style="italic" fill="#9A9488">memory and use</text>
  </g>

  <!-- Hostile parking plaza -->
  <line x1="20" y1="304" x2="300" y2="304" stroke="#E8DECA" stroke-width="0.9"/>
  <!-- parking stalls -->
  <g stroke="#9A9488" stroke-width="0.4" fill="none" opacity="0.7">
    <line x1="40" y1="306" x2="40" y2="328"/>
    <line x1="56" y1="306" x2="56" y2="328"/>
    <line x1="72" y1="306" x2="72" y2="328"/>
    <line x1="88" y1="306" x2="88" y2="328"/>
    <line x1="104" y1="306" x2="104" y2="328"/>
    <line x1="120" y1="306" x2="120" y2="328"/>
    <line x1="136" y1="306" x2="136" y2="328"/>
    <line x1="152" y1="306" x2="152" y2="328"/>
    <line x1="168" y1="306" x2="168" y2="328"/>
    <line x1="184" y1="306" x2="184" y2="328"/>
    <line x1="200" y1="306" x2="200" y2="328"/>
    <line x1="216" y1="306" x2="216" y2="328"/>
    <line x1="232" y1="306" x2="232" y2="328"/>
    <line x1="248" y1="306" x2="248" y2="328"/>
    <line x1="264" y1="306" x2="264" y2="328"/>
    <line x1="280" y1="306" x2="280" y2="328"/>
    <line x1="40" y1="328" x2="280" y2="328"/>
  </g>
  <!-- a few small cars -->
  <g fill="#9A9488" opacity="0.6">
    <rect x="42" y="312" width="11" height="6"/>
    <rect x="74" y="312" width="11" height="6"/>
    <rect x="138" y="312" width="11" height="6"/>
    <rect x="186" y="312" width="11" height="6"/>
    <rect x="234" y="312" width="11" height="6"/>
    <rect x="266" y="312" width="11" height="6"/>
  </g>

  <!-- empty asphalt expanse hatching -->
  <g stroke="#9A9488" stroke-width="0.2" opacity="0.3">
    <line x1="20" y1="334" x2="300" y2="334"/>
    <line x1="20" y1="338" x2="300" y2="338"/>
    <line x1="20" y1="342" x2="300" y2="342"/>
  </g>

  <line x1="20" y1="358" x2="300" y2="358" stroke="#9A9488" stroke-width="0.4"/>
  <text x="20" y="370" font-family="IBM Plex Mono,monospace" font-size="6.3" fill="#DFC98A" letter-spacing="0.1em">SOVIET ASSOCIATIONS · EVERYDAY WARSAW LANDMARK</text>
  <text x="20" y="380" font-family="IBM Plex Mono,monospace" font-size="6.3" fill="#9A9488" letter-spacing="0.1em">POLITICAL ORIGIN AND URBAN USE REMAIN IN TENSION</text>
</svg>`;

  window.ARCH_SVGS = {
    pagoda:       PAGODA_ELEVATION,
    palace:       PALACE_ELEVATION,
    pagodaAgency: PAGODA_AGENCY,
    pagodaForm:   PAGODA_FORM,
    pagodaLegacy: PAGODA_LEGACY,
    palaceAgency: PALACE_AGENCY,
    palaceForm:   PALACE_FORM,
    palaceLegacy: PALACE_LEGACY,
  };

  // ────────── TIMELINE 160×200 SVGS (replace base64 photos) ──────────
  // Style: small architectural icons, cream paper, dark ink for SR;
  // dark paper, cream ink for CW.

  // Event 2: Mogao Caves, Dunhuang
  const TL_MOGAO = `
<svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg" style="background:#F8F5EF;width:100%;height:100%;display:block">
  <!-- cliff face -->
  <path d="M0 40 L0 168 L160 168 L160 32 L150 38 L140 32 L128 38 L112 30 L96 38 L82 32 L66 40 L50 34 L34 40 L18 32 Z" fill="#EDE5D2" stroke="#3D3020" stroke-width="0.8"/>
  <!-- cave openings (arched) carved in cliff -->
  <g stroke="#3D3020" stroke-width="0.7" fill="#1A1108">
    <path d="M16 100 L16 78 Q22 72 28 78 L28 100 Z"/>
    <path d="M40 110 L40 86 Q46 80 52 86 L52 110 Z"/>
    <path d="M64 96 L64 76 Q70 70 76 76 L76 96 Z"/>
    <path d="M86 120 L86 96 Q92 90 98 96 L98 120 Z"/>
    <path d="M108 108 L108 86 Q114 80 120 86 L120 108 Z"/>
    <path d="M130 96 L130 76 Q136 70 142 76 L142 96 Z"/>
    <!-- second row -->
    <path d="M28 140 L28 122 Q34 118 40 122 L40 140 Z"/>
    <path d="M56 144 L56 124 Q62 120 68 124 L68 144 Z"/>
    <path d="M84 152 L84 134 Q90 130 96 134 L96 152 Z"/>
    <path d="M112 144 L112 124 Q118 120 124 124 L124 144 Z"/>
  </g>
  <!-- ground -->
  <line x1="0" y1="168" x2="160" y2="168" stroke="#3D3020" stroke-width="1"/>
  <!-- buddha statue ghost in main cave -->
  <ellipse cx="46" cy="100" rx="1.5" ry="2.5" fill="#C49A2E"/>
  <!-- tiny pilgrim figure -->
  <g fill="#3D3020">
    <circle cx="76" cy="160" r="1.2"/><rect x="75" y="161" width="2" height="5"/>
  </g>
  <!-- label -->
  <line x1="10" y1="180" x2="150" y2="180" stroke="#C8C0B0" stroke-width="0.5"/>
  <text x="80" y="190" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#3A3530" font-style="italic">Mogao Caves</text>
  <text x="80" y="199" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#7A7060" letter-spacing="0.08em">DUNHUANG · 366 CE</text>
</svg>`;

  // Event 3: Giant Wild Goose Pagoda (small format)
  const TL_PAGODA = `
<svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg" style="background:#F8F5EF;width:100%;height:100%;display:block">
  <!-- soft paper hatching, matching the Silk Road timeline plates -->
  <g stroke="#BDBAB2" stroke-width="0.32" opacity="0.42">
    <line x1="0" y1="10" x2="46" y2="0"/>
    <line x1="0" y1="24" x2="66" y2="0"/>
    <line x1="114" y1="0" x2="160" y2="20"/>
    <line x1="126" y1="0" x2="160" y2="12"/>
  </g>
  <rect x="0" y="148" width="160" height="22" fill="#E0DBCF"/>

  <!-- stupa-derived finial -->
  <g stroke="#1A1108" fill="none" stroke-width="0.8" stroke-linecap="round">
    <line x1="80" y1="30" x2="80" y2="49"/>
    <circle cx="80" cy="29" r="1.7" fill="#1A1108"/>
    <line x1="73" y1="37" x2="87" y2="37"/>
    <line x1="72" y1="42" x2="88" y2="42"/>
    <line x1="70" y1="47" x2="90" y2="47"/>
  </g>

  <!-- Giant Wild Goose Pagoda, rendered as masonry plate -->
  <g stroke="#1A1108" stroke-linejoin="miter">
    <path d="M67 52 L93 52 L97 57 L63 57 Z" fill="#C8C0B0" stroke-width="0.78"/>
    <rect x="68" y="57" width="24" height="10" fill="#EDE5D2" stroke-width="0.72"/>

    <path d="M61 69 L99 69 L104 75 L56 75 Z" fill="#C8C0B0" stroke-width="0.82"/>
    <rect x="63" y="75" width="34" height="12" fill="#EDE5D2" stroke-width="0.75"/>

    <path d="M55 89 L105 89 L111 96 L49 96 Z" fill="#C8C0B0" stroke-width="0.86"/>
    <rect x="58" y="96" width="44" height="14" fill="#EDE5D2" stroke-width="0.78"/>

    <path d="M48 112 L112 112 L119 120 L41 120 Z" fill="#C8C0B0" stroke-width="0.9"/>
    <rect x="52" y="120" width="56" height="16" fill="#EDE5D2" stroke-width="0.82"/>

    <path d="M40 138 L120 138 L128 148 L32 148 Z" fill="#C8C0B0" stroke-width="0.95"/>
    <rect x="46" y="148" width="68" height="12" fill="#EDE5D2" stroke-width="0.86"/>
  </g>

  <!-- masonry joints and dark openings -->
  <g stroke="#3D3020" stroke-width="0.32" opacity="0.62">
    <line x1="68" y1="62" x2="92" y2="62"/>
    <line x1="63" y1="81" x2="97" y2="81"/>
    <line x1="58" y1="102" x2="102" y2="102"/>
    <line x1="52" y1="128" x2="108" y2="128"/>
    <line x1="46" y1="154" x2="114" y2="154"/>
    <line x1="72" y1="57" x2="72" y2="160"/>
    <line x1="80" y1="57" x2="80" y2="160"/>
    <line x1="88" y1="57" x2="88" y2="160"/>
  </g>
  <g fill="#1A1108" opacity="0.86">
    <rect x="77.5" y="78" width="5" height="7"/>
    <rect x="76" y="100" width="8" height="8"/>
    <rect x="75" y="124" width="10" height="10"/>
    <rect x="74" y="151" width="12" height="9"/>
  </g>

  <line x1="10" y1="170" x2="150" y2="170" stroke="#3D3020" stroke-width="0.8"/>
  <line x1="10" y1="180" x2="150" y2="180" stroke="#C8C0B0" stroke-width="0.5"/>
  <text x="80" y="190" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#3A3530" font-style="italic">Wild Goose Pagoda</text>
  <text x="80" y="199" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#7A7060" letter-spacing="0.08em">XI'AN · 652 CE</text>
</svg>`;

  // Event 4: Karakhanid mausoleum (Central Asian portal-fronted tomb)
  const TL_KARAKHANID = `
<svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg" style="background:#F8F5EF;width:100%;height:100%;display:block">
  <!-- main mass -->
  <rect x="40" y="60" width="80" height="100" fill="#EDE5D2" stroke="#1A1108" stroke-width="0.9"/>
  <!-- dome -->
  <path d="M50 60 Q80 30 110 60 Z" fill="#EDE5D2" stroke="#1A1108" stroke-width="0.9"/>
  <line x1="50" y1="60" x2="110" y2="60" stroke="#1A1108" stroke-width="0.8"/>
  <!-- portal iwan (pointed arch) -->
  <path d="M62 160 L62 100 Q62 88 80 84 Q98 88 98 100 L98 160 Z" fill="#1A1108"/>
  <path d="M58 160 L58 96 Q58 80 80 76 Q102 80 102 96 L102 160" fill="none" stroke="#1A1108" stroke-width="1.1"/>
  <!-- corner half-columns -->
  <rect x="38" y="60" width="3" height="100" fill="#1A1108"/>
  <rect x="119" y="60" width="3" height="100" fill="#1A1108"/>
  <!-- decorative brickwork hatching -->
  <g stroke="#3D3020" stroke-width="0.3" opacity="0.6">
    <line x1="44" y1="80" x2="58" y2="80"/>
    <line x1="44" y1="90" x2="58" y2="90"/>
    <line x1="44" y1="100" x2="58" y2="100"/>
    <line x1="102" y1="80" x2="116" y2="80"/>
    <line x1="102" y1="90" x2="116" y2="90"/>
    <line x1="102" y1="100" x2="116" y2="100"/>
  </g>
  <!-- top frieze -->
  <line x1="40" y1="68" x2="120" y2="68" stroke="#1A1108" stroke-width="0.5"/>
  <line x1="40" y1="72" x2="120" y2="72" stroke="#1A1108" stroke-width="0.5"/>
  <line x1="10" y1="170" x2="150" y2="170" stroke="#3D3020" stroke-width="0.8"/>
  <line x1="10" y1="180" x2="150" y2="180" stroke="#C8C0B0" stroke-width="0.5"/>
  <text x="80" y="190" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#3A3530" font-style="italic">Karakhanid Mausoleum</text>
  <text x="80" y="199" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#7A7060" letter-spacing="0.08em">UZGEN · 11th C.</text>
</svg>`;

  // Event 5: Bibi-Khanym Mosque, Samarkand (Timurid)
  const TL_BIBIKHANYM = `
<svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg" style="background:#F8F5EF;width:100%;height:100%;display:block">
  <!-- minarets -->
  <rect x="18" y="78" width="6" height="82" fill="#EDE5D2" stroke="#1A1108" stroke-width="0.7"/>
  <circle cx="21" cy="78" r="4" fill="#EDE5D2" stroke="#1A1108" stroke-width="0.7"/>
  <rect x="136" y="78" width="6" height="82" fill="#EDE5D2" stroke="#1A1108" stroke-width="0.7"/>
  <circle cx="139" cy="78" r="4" fill="#EDE5D2" stroke="#1A1108" stroke-width="0.7"/>
  <!-- main facade with central iwan -->
  <rect x="30" y="92" width="100" height="68" fill="#EDE5D2" stroke="#1A1108" stroke-width="0.9"/>
  <!-- big melon dome behind -->
  <ellipse cx="80" cy="86" rx="22" ry="20" fill="#EDE5D2" stroke="#1A1108" stroke-width="0.9"/>
  <!-- dome ribs -->
  <g stroke="#1A1108" stroke-width="0.4">
    <path d="M58 86 Q60 70 72 66" fill="none"/>
    <path d="M65 70 Q72 60 80 60" fill="none"/>
    <path d="M80 60 Q80 60 95 70" fill="none"/>
    <path d="M102 86 Q100 70 88 66" fill="none"/>
  </g>
  <line x1="58" y1="86" x2="102" y2="86" stroke="#1A1108" stroke-width="0.7"/>
  <!-- central iwan (pointed) -->
  <path d="M54 160 L54 116 Q54 96 80 92 Q106 96 106 116 L106 160 Z" fill="#1A1108"/>
  <!-- side niches -->
  <rect x="36" y="120" width="14" height="22" fill="#1A1108"/>
  <rect x="110" y="120" width="14" height="22" fill="#1A1108"/>
  <!-- tile pattern hatching -->
  <g stroke="#3D3020" stroke-width="0.3" opacity="0.5">
    <line x1="30" y1="100" x2="130" y2="100"/>
    <line x1="30" y1="108" x2="130" y2="108"/>
  </g>
  <line x1="10" y1="170" x2="150" y2="170" stroke="#3D3020" stroke-width="0.8"/>
  <line x1="10" y1="180" x2="150" y2="180" stroke="#C8C0B0" stroke-width="0.5"/>
  <text x="80" y="190" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#3A3530" font-style="italic">Bibi-Khanym Mosque</text>
  <text x="80" y="199" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#7A7060" letter-spacing="0.08em">SAMARKAND · 1404</text>
</svg>`;

  // Event 7: Seven Sisters (Moscow skyline)
  const TL_SEVEN_SISTERS = `
<svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg" style="background:#0F0A05;width:100%;height:100%;display:block">
  <!-- Seven Sisters: seven vertical Stalinist towers with varied crowns -->
  <g stroke="#9A9488" stroke-width="0.35" opacity="0.35">
    <line x1="0" y1="18" x2="44" y2="0"/>
    <line x1="112" y1="0" x2="160" y2="22"/>
    <line x1="0" y1="38" x2="72" y2="0"/>
  </g>

  <g fill="none" stroke-linejoin="miter">
    <!-- 1: Moscow State University type -->
    <g stroke="#9A9488" stroke-width="0.58">
      <rect x="5" y="91" width="18" height="71"/>
      <rect x="8" y="73" width="12" height="18"/>
      <path d="M10 73 L14 59 L18 73"/>
      <line x1="14" y1="59" x2="14" y2="43"/>
      <circle cx="14" cy="41" r="1.3" fill="#9A9488"/>
      <path d="M2 162 L26 162 M4 148 L24 148 M6 91 L22 91"/>
      <line x1="10" y1="98" x2="10" y2="156"/><line x1="14" y1="98" x2="14" y2="156"/><line x1="18" y1="98" x2="18" y2="156"/>
    </g>

    <!-- 2: dark vertical ministry block -->
    <g stroke="#7F786E" stroke-width="0.55">
      <rect x="27" y="105" width="16" height="57"/>
      <rect x="30" y="82" width="10" height="23"/>
      <path d="M31 82 L35 68 L39 82"/>
      <line x1="35" y1="68" x2="35" y2="48"/>
      <circle cx="35" cy="46" r="1.1" fill="#7F786E"/>
      <path d="M24 162 L46 162 M26 146 L44 146"/>
      <line x1="31" y1="110" x2="31" y2="156"/><line x1="35" y1="110" x2="35" y2="156"/><line x1="39" y1="110" x2="39" y2="156"/>
    </g>

    <!-- 3: hotel tower with round crown -->
    <g stroke="#B8AE96" stroke-width="0.6">
      <rect x="48" y="96" width="16" height="66"/>
      <rect x="50" y="76" width="12" height="20"/>
      <ellipse cx="56" cy="71" rx="6" ry="5"/>
      <line x1="56" y1="66" x2="56" y2="44"/>
      <circle cx="56" cy="42" r="1.3" fill="#B8AE96"/>
      <path d="M45 162 L67 162 M47 144 L65 144 M48 96 L64 96"/>
      <line x1="52" y1="101" x2="52" y2="156"/><line x1="56" y1="101" x2="56" y2="156"/><line x1="60" y1="101" x2="60" y2="156"/>
    </g>

    <!-- 4: central dominant tower -->
    <g stroke="#E8DECA" stroke-width="0.72">
      <rect x="70" y="82" width="20" height="80"/>
      <rect x="67" y="104" width="26" height="58"/>
      <rect x="72" y="61" width="16" height="21"/>
      <path d="M74 61 L80 47 L86 61"/>
      <line x1="80" y1="47" x2="80" y2="24"/>
      <circle cx="80" cy="22" r="1.5" fill="#E8DECA"/>
      <path d="M62 162 L98 162 M65 148 L95 148 M67 104 L93 104 M70 82 L90 82"/>
      <line x1="74" y1="88" x2="74" y2="156"/><line x1="80" y1="88" x2="80" y2="156"/><line x1="86" y1="88" x2="86" y2="156"/>
      <line x1="72" y1="116" x2="88" y2="116"/><line x1="72" y1="130" x2="88" y2="130"/>
    </g>

    <!-- 5: broad apartment high-rise -->
    <g stroke="#B8AE96" stroke-width="0.6">
      <rect x="99" y="91" width="19" height="71"/>
      <rect x="102" y="70" width="13" height="21"/>
      <path d="M103 70 L108.5 55 L114 70"/>
      <line x1="108.5" y1="55" x2="108.5" y2="38"/>
      <circle cx="108.5" cy="36" r="1.2" fill="#B8AE96"/>
      <path d="M96 162 L121 162 M98 146 L120 146 M99 91 L118 91"/>
      <line x1="104" y1="98" x2="104" y2="156"/><line x1="108.5" y1="98" x2="108.5" y2="156"/><line x1="113" y1="98" x2="113" y2="156"/>
    </g>

    <!-- 6: Ukraina-like tower with heavy crown -->
    <g stroke="#9A9488" stroke-width="0.58">
      <rect x="124" y="98" width="18" height="64"/>
      <rect x="127" y="79" width="12" height="19"/>
      <path d="M124 91 L133 72 L142 91"/>
      <line x1="133" y1="72" x2="133" y2="49"/>
      <circle cx="133" cy="47" r="1.1" fill="#9A9488"/>
      <path d="M121 162 L145 162 M123 145 L143 145 M124 98 L142 98"/>
      <line x1="129" y1="104" x2="129" y2="156"/><line x1="133" y1="104" x2="133" y2="156"/><line x1="137" y1="104" x2="137" y2="156"/>
    </g>

    <!-- 7: narrow lit terminal-like tower -->
    <g stroke="#E8DECA" stroke-width="0.55">
      <rect x="146" y="106" width="10" height="56"/>
      <rect x="147" y="84" width="8" height="22"/>
      <path d="M148 84 L151 68 L154 84"/>
      <line x1="151" y1="68" x2="151" y2="39"/>
      <circle cx="151" cy="37" r="1" fill="#E8DECA"/>
      <path d="M143 162 L159 162 M145 146 L157 146"/>
      <line x1="149" y1="111" x2="149" y2="156"/><line x1="153" y1="111" x2="153" y2="156"/>
    </g>
  </g>

  <line x1="0" y1="168" x2="160" y2="168" stroke="#E8DECA" stroke-width="0.9"/>
  <line x1="10" y1="180" x2="150" y2="180" stroke="#9A9488" stroke-width="0.4"/>
  <text x="80" y="190" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#E8DECA" font-style="italic">Stalin's Seven Sisters</text>
  <text x="80" y="199" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#9A9488" letter-spacing="0.08em">MOSCOW · 1947–1953</text>
</svg>`;

  // Event 8: Palace of Culture (small format)
  const TL_PALACE = `
<svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg" style="background:#0F0A05;width:100%;height:100%;display:block">
  <!-- Palace of Culture and Science, Warsaw: broad podium, tall shaft, ornate crown, needle spire -->
  <g stroke="#9A9488" stroke-width="0.35" opacity="0.36">
    <line x1="0" y1="16" x2="44" y2="0"/>
    <line x1="0" y1="34" x2="70" y2="0"/>
    <line x1="112" y1="0" x2="160" y2="22"/>
  </g>

  <!-- lower stepped podium and side wings -->
  <g stroke="#9A9488" fill="none" stroke-width="0.72">
    <rect x="34" y="137" width="92" height="25"/>
    <rect x="42" y="123" width="76" height="14"/>
    <rect x="50" y="111" width="60" height="12"/>
    <rect x="28" y="147" width="18" height="15"/>
    <rect x="114" y="147" width="18" height="15"/>
    <path d="M24 162 L136 162"/>
    <path d="M32 151 L128 151"/>
  </g>

  <!-- vertical central shaft -->
  <g stroke="#E8DECA" fill="none" stroke-width="0.86">
    <rect x="59" y="66" width="42" height="96"/>
    <rect x="64" y="52" width="32" height="14"/>
    <rect x="69" y="39" width="22" height="13"/>
    <path d="M63 66 L55 82 L55 111"/>
    <path d="M97 66 L105 82 L105 111"/>
    <path d="M59 85 L101 85"/>
    <path d="M55 111 L105 111"/>
  </g>

  <!-- crown, clock zone, and spire -->
  <g stroke="#E8DECA" fill="none" stroke-width="0.78">
    <path d="M68 39 L80 24 L92 39"/>
    <line x1="80" y1="24" x2="80" y2="12"/>
    <line x1="75" y1="29" x2="85" y2="29"/>
    <circle cx="80" cy="12" r="1.3" fill="#E8DECA"/>
    <circle cx="80" cy="61" r="4.2"/>
    <line x1="80" y1="58" x2="80" y2="61"/>
    <line x1="80" y1="61" x2="83" y2="61"/>
  </g>

  <!-- narrow vertical window bands -->
  <g stroke="#9A9488" stroke-width="0.36" opacity="0.82">
    <line x1="66" y1="72" x2="66" y2="156"/>
    <line x1="73" y1="72" x2="73" y2="156"/>
    <line x1="80" y1="72" x2="80" y2="156"/>
    <line x1="87" y1="72" x2="87" y2="156"/>
    <line x1="94" y1="72" x2="94" y2="156"/>
    <line x1="60" y1="96" x2="100" y2="96"/>
    <line x1="60" y1="108" x2="100" y2="108"/>
    <line x1="60" y1="120" x2="100" y2="120"/>
    <line x1="60" y1="132" x2="100" y2="132"/>
    <line x1="60" y1="144" x2="100" y2="144"/>
    <line x1="46" y1="128" x2="114" y2="128"/>
    <line x1="40" y1="143" x2="120" y2="143"/>
  </g>

  <!-- local Gothic-style pinnacles shown as small vertical teeth -->
  <g stroke="#E8DECA" stroke-width="0.6" opacity="0.8">
    <line x1="56" y1="82" x2="56" y2="74"/>
    <line x1="104" y1="82" x2="104" y2="74"/>
    <line x1="64" y1="52" x2="64" y2="45"/>
    <line x1="96" y1="52" x2="96" y2="45"/>
    <line x1="70" y1="39" x2="70" y2="33"/>
    <line x1="90" y1="39" x2="90" y2="33"/>
  </g>

  <line x1="0" y1="168" x2="160" y2="168" stroke="#E8DECA" stroke-width="0.9"/>
  <line x1="10" y1="180" x2="150" y2="180" stroke="#9A9488" stroke-width="0.4"/>
  <text x="80" y="190" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#E8DECA" font-style="italic">Palace of Culture</text>
  <text x="80" y="199" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#9A9488" letter-spacing="0.08em">WARSAW · 1955</text>
</svg>`;

  // Event 6: Soviet bloc established (official style)
  const TL_SOVIET_BLOC = `
<svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg" style="background:#0F0A05;width:100%;height:100%;display:block">
  <g stroke="#9A9488" stroke-width="0.35" opacity="0.45">
    <line x1="0" y1="18" x2="44" y2="0"/>
    <line x1="0" y1="34" x2="70" y2="0"/>
    <line x1="110" y1="0" x2="160" y2="22"/>
  </g>
  <rect x="10" y="72" width="140" height="76" fill="none" stroke="#E8DECA" stroke-width="0.9"/>
  <rect x="7" y="64" width="146" height="9" fill="none" stroke="#E8DECA" stroke-width="0.85"/>
  <rect x="16" y="100" width="128" height="8" fill="none" stroke="#9A9488" stroke-width="0.55"/>
  <g stroke="#E8DECA" stroke-width="1.25">
    <line x1="22" y1="108" x2="22" y2="148"/>
    <line x1="34" y1="108" x2="34" y2="148"/>
    <line x1="46" y1="108" x2="46" y2="148"/>
    <line x1="114" y1="108" x2="114" y2="148"/>
    <line x1="126" y1="108" x2="126" y2="148"/>
    <line x1="138" y1="108" x2="138" y2="148"/>
  </g>
  <g stroke="#9A9488" stroke-width="0.55">
    <rect x="18" y="77" width="12" height="14" fill="none"/>
    <rect x="36" y="77" width="12" height="14" fill="none"/>
    <rect x="58" y="77" width="44" height="14" fill="none"/>
    <rect x="112" y="77" width="12" height="14" fill="none"/>
    <rect x="130" y="77" width="12" height="14" fill="none"/>
  </g>
  <rect x="64" y="118" width="32" height="30" fill="none" stroke="#E8DECA" stroke-width="0.75"/>
  <path d="M62 120 Q80 109 98 120" fill="none" stroke="#E8DECA" stroke-width="0.75"/>
  <polygon points="80,50 82.6,57 90,57 84,61.2 86.4,68 80,63.8 73.6,68 76,61.2 70,57 77.4,57"
    fill="none" stroke="#E8DECA" stroke-width="0.85"/>
  <line x1="0" y1="168" x2="160" y2="168" stroke="#E8DECA" stroke-width="0.9"/>
  <line x1="10" y1="180" x2="150" y2="180" stroke="#9A9488" stroke-width="0.4"/>
  <text x="80" y="190" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#E8DECA" font-style="italic">Socialist Realism</text>
  <text x="80" y="199" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#9A9488" letter-spacing="0.08em">MANDATED · 1945–1949</text>
</svg>`;

  // Event 9: Khrushchev decree (prefabricated modernism by policy)
  const TL_KHRUSHCHEV = `
<svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg" style="background:#0F0A05;width:100%;height:100%;display:block">
  <g stroke="#9A9488" stroke-width="0.35" opacity="0.45">
    <line x1="0" y1="14" x2="38" y2="0"/>
    <line x1="0" y1="28" x2="62" y2="0"/>
    <line x1="112" y1="0" x2="160" y2="20"/>
  </g>
  <g stroke="#E8DECA" fill="none" stroke-width="0.85">
    <rect x="24" y="54" width="112" height="108"/>
    <line x1="52" y1="54" x2="52" y2="162"/>
    <line x1="80" y1="54" x2="80" y2="162"/>
    <line x1="108" y1="54" x2="108" y2="162"/>
    <line x1="24" y1="78" x2="136" y2="78"/>
    <line x1="24" y1="102" x2="136" y2="102"/>
    <line x1="24" y1="126" x2="136" y2="126"/>
    <line x1="24" y1="150" x2="136" y2="150"/>
  </g>
  <g stroke="#9A9488" fill="none" stroke-width="0.55">
    <rect x="31" y="61" width="12" height="10"/>
    <rect x="59" y="61" width="12" height="10"/>
    <rect x="87" y="61" width="12" height="10"/>
    <rect x="115" y="61" width="12" height="10"/>
    <rect x="31" y="86" width="12" height="10"/>
    <rect x="59" y="86" width="12" height="10"/>
    <rect x="87" y="86" width="12" height="10"/>
    <rect x="115" y="86" width="12" height="10"/>
    <rect x="31" y="110" width="12" height="10"/>
    <rect x="59" y="110" width="12" height="10"/>
    <rect x="87" y="110" width="12" height="10"/>
    <rect x="115" y="110" width="12" height="10"/>
  </g>
  <g stroke="#E8DECA" stroke-width="1.1" opacity="0.85">
    <line x1="13" y1="36" x2="45" y2="58"/>
    <line x1="45" y1="36" x2="13" y2="58"/>
  </g>
  <text x="29" y="31" text-anchor="middle" font-family="monospace" font-size="7" fill="#9A9488" letter-spacing="0.08em">DECREE</text>
  <line x1="0" y1="168" x2="160" y2="168" stroke="#E8DECA" stroke-width="0.9"/>
  <line x1="10" y1="180" x2="150" y2="180" stroke="#9A9488" stroke-width="0.4"/>
  <text x="80" y="190" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#E8DECA" font-style="italic">Khrushchev Decree</text>
  <text x="80" y="199" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#9A9488" letter-spacing="0.08em">PREFAB MODERNISM · 1955</text>
</svg>`;

  // Event 10: US Embassy New Delhi (modernist box with jali screen)
  const TL_EMBASSY = `
<svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg" style="background:#0F0A05;width:100%;height:100%;display:block">
  <!-- elevated podium -->
  <rect x="20" y="146" width="120" height="16" fill="none" stroke="#E8DECA" stroke-width="0.8"/>
  <!-- columns (slender) -->
  <g stroke="#E8DECA" stroke-width="0.6" fill="none">
    <line x1="30" y1="146" x2="30" y2="162"/>
    <line x1="45" y1="146" x2="45" y2="162"/>
    <line x1="60" y1="146" x2="60" y2="162"/>
    <line x1="75" y1="146" x2="75" y2="162"/>
    <line x1="90" y1="146" x2="90" y2="162"/>
    <line x1="105" y1="146" x2="105" y2="162"/>
    <line x1="120" y1="146" x2="120" y2="162"/>
    <line x1="135" y1="146" x2="135" y2="162"/>
  </g>
  <!-- main box -->
  <rect x="20" y="50" width="120" height="96" fill="#0F0A05" stroke="#E8DECA" stroke-width="0.9"/>
  <!-- jali screen pattern (perforated) -->
  <g fill="#E8DECA">
    ${(() => {
      let out = '';
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 14; col++) {
          const cx = 28 + col * 8;
          const cy = 58 + row * 10;
          out += `<rect x="${cx - 1.5}" y="${cy - 1.5}" width="3" height="3" fill="none" stroke="#E8DECA" stroke-width="0.4"/>`;
          out += `<circle cx="${cx}" cy="${cy}" r="0.8" fill="#9A9488"/>`;
        }
      }
      return out;
    })()}
  </g>
  <!-- flat roof slab -->
  <rect x="16" y="46" width="128" height="4" fill="#E8DECA" opacity="0.6"/>
  <!-- ground -->
  <line x1="0" y1="162" x2="160" y2="162" stroke="#E8DECA" stroke-width="0.9"/>
  <!-- shadow under building -->
  <g stroke="#9A9488" stroke-width="0.2" opacity="0.4">
    <line x1="22" y1="164" x2="138" y2="164"/>
  </g>
  <line x1="10" y1="180" x2="150" y2="180" stroke="#9A9488" stroke-width="0.4"/>
  <text x="80" y="190" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#E8DECA" font-style="italic">US Embassy, New Delhi</text>
  <text x="80" y="199" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#9A9488" letter-spacing="0.08em">E.D. STONE · 1959</text>
</svg>`;

  // Event 11: Palace of the Parliament, Bucharest (colossal flat block)
  const TL_BUCHAREST = `
<svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg" style="background:#0F0A05;width:100%;height:100%;display:block">
  <!-- enormous frontal block -->
  <rect x="6" y="60" width="148" height="102" fill="none" stroke="#E8DECA" stroke-width="0.9"/>
  <!-- central projecting bay -->
  <rect x="56" y="48" width="48" height="14" fill="none" stroke="#E8DECA" stroke-width="0.9"/>
  <!-- pediment hint -->
  <path d="M52 48 L80 36 L108 48" fill="none" stroke="#E8DECA" stroke-width="0.7"/>
  <!-- side towers -->
  <rect x="6" y="50" width="14" height="12" fill="none" stroke="#E8DECA" stroke-width="0.7"/>
  <rect x="140" y="50" width="14" height="12" fill="none" stroke="#E8DECA" stroke-width="0.7"/>
  <!-- columns across front (massive colonnade) -->
  <g stroke="#9A9488" stroke-width="0.45" fill="none">
    <line x1="14" y1="72" x2="14" y2="160"/>
    <line x1="22" y1="72" x2="22" y2="160"/>
    <line x1="30" y1="72" x2="30" y2="160"/>
    <line x1="38" y1="72" x2="38" y2="160"/>
    <line x1="46" y1="72" x2="46" y2="160"/>
    <line x1="54" y1="72" x2="54" y2="160"/>
    <line x1="62" y1="72" x2="62" y2="160"/>
    <line x1="70" y1="72" x2="70" y2="160"/>
    <line x1="80" y1="72" x2="80" y2="160"/>
    <line x1="90" y1="72" x2="90" y2="160"/>
    <line x1="98" y1="72" x2="98" y2="160"/>
    <line x1="106" y1="72" x2="106" y2="160"/>
    <line x1="114" y1="72" x2="114" y2="160"/>
    <line x1="122" y1="72" x2="122" y2="160"/>
    <line x1="130" y1="72" x2="130" y2="160"/>
    <line x1="138" y1="72" x2="138" y2="160"/>
    <line x1="146" y1="72" x2="146" y2="160"/>
  </g>
  <!-- floor lines -->
  <g stroke="#9A9488" stroke-width="0.3" opacity="0.7">
    <line x1="6" y1="84" x2="154" y2="84"/>
    <line x1="6" y1="100" x2="154" y2="100"/>
    <line x1="6" y1="120" x2="154" y2="120"/>
    <line x1="6" y1="140" x2="154" y2="140"/>
  </g>
  <!-- central entry -->
  <rect x="72" y="148" width="16" height="14" fill="#E8DECA" opacity="0.8"/>
  <!-- ground -->
  <line x1="0" y1="162" x2="160" y2="162" stroke="#E8DECA" stroke-width="1"/>
  <line x1="10" y1="180" x2="150" y2="180" stroke="#9A9488" stroke-width="0.4"/>
  <text x="80" y="190" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#E8DECA" font-style="italic">Palace of the Parliament</text>
  <text x="80" y="199" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#9A9488" letter-spacing="0.08em">BUCHAREST · 1984–1997</text>
</svg>`;

  Object.assign(window.ARCH_SVGS, {
    tlMogao:        TL_MOGAO,
    tlPagoda:       TL_PAGODA,
    tlKarakhanid:   TL_KARAKHANID,
    tlBibiKhanym:   TL_BIBIKHANYM,
    tlSovietBloc:   TL_SOVIET_BLOC,
    tlSevenSisters: TL_SEVEN_SISTERS,
    tlPalace:       TL_PALACE,
    tlKhrushchev:   TL_KHRUSHCHEV,
    tlEmbassy:      TL_EMBASSY,
    tlBucharest:    TL_BUCHAREST,
  });

  // ────────── CLOSING: composite of Pagoda + Palace + ghosted future tower ──────────
  const CLOSING_COMPOSITE = `
<svg viewBox="0 0 320 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:100%;background:#0F0A05">
  <g stroke="#DFC98A" stroke-width="0.6" fill="none">
    <path d="M10 18 L10 10 L18 10"/><path d="M310 18 L310 10 L302 10"/>
    <path d="M10 382 L10 390 L18 390"/><path d="M310 382 L310 390 L302 390"/>
  </g>
  <text x="160" y="22" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="8" fill="#DFC98A" letter-spacing="0.22em">PLATE III: TIME OVERLAID</text>
  <text x="160" y="34" text-anchor="middle" font-family="Playfair Display,Georgia,serif" font-size="10" font-style="italic" fill="#E8DECA">Three encounters, one ground line</text>
  <line x1="120" y1="40" x2="200" y2="40" stroke="#DFC98A" stroke-width="0.5"/>

  <!-- Background: Pagoda (gold, light, behind) -->
  <g opacity="0.78">
    ${pagodaSilhouette(95, 80, 1.55, '#C49A2E', 1.1)}
  </g>
  <g>
    <rect x="28" y="228" width="88" height="27" fill="#0F0A05" opacity="0.86"/>
    <line x1="35" y1="242" x2="64" y2="242" stroke="#C49A2E" stroke-width="0.45"/>
    <text x="35" y="238" font-family="IBM Plex Mono,monospace" font-size="6.5" fill="#C49A2E" letter-spacing="0.12em">PERIOD III</text>
    <text x="35" y="251" font-family="Noto Serif,serif" font-size="6.5" font-style="italic" fill="#DFC98A">voluntary / 652 CE</text>
  </g>

  <!-- Middle: Palace (cream, sharp) -->
  <g opacity="0.88">
    ${palaceSilhouette(195, 80, 1.3, '#E8DECA', 1.0)}
  </g>
  <g>
    <rect x="218" y="258" width="78" height="27" fill="#0F0A05" opacity="0.88"/>
    <line x1="225" y1="272" x2="253" y2="272" stroke="#E8DECA" stroke-width="0.45"/>
    <text x="225" y="268" font-family="IBM Plex Mono,monospace" font-size="6.5" fill="#E8DECA" letter-spacing="0.12em">PERIOD VI</text>
    <text x="225" y="281" font-family="Noto Serif,serif" font-size="6.5" font-style="italic" fill="#9A9488">state-led / 1955</text>
  </g>

  <!-- Foreground: ghosted contemporary tower (BRI/soft-power, undrawn) -->
  <g opacity="0.32" stroke="#B5271B" fill="none" stroke-width="1" stroke-dasharray="3 3">
    <!-- abstracted modernist tower with twist -->
    <path d="M150 320 L150 130 L162 124 L175 130 L175 320 Z"/>
    <line x1="150" y1="160" x2="175" y2="156"/>
    <line x1="150" y1="190" x2="175" y2="186"/>
    <line x1="150" y1="220" x2="175" y2="216"/>
    <line x1="150" y1="250" x2="175" y2="246"/>
    <line x1="150" y1="280" x2="175" y2="276"/>
  </g>
  <g>
    <rect x="144" y="108" width="37" height="18" fill="#0F0A05" opacity="0.82"/>
    <text x="162" y="120" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="7" fill="#B5271B" letter-spacing="0.14em">TODAY</text>
  </g>

  <!-- Ground line all three share -->
  <line x1="20" y1="320" x2="300" y2="320" stroke="#E8DECA" stroke-width="1.1"/>
  <g stroke="#9A9488" stroke-width="0.3" opacity="0.5">
    <line x1="20" y1="320" x2="14" y2="330"/>
    <line x1="60" y1="320" x2="54" y2="330"/>
    <line x1="100" y1="320" x2="94" y2="330"/>
    <line x1="140" y1="320" x2="134" y2="330"/>
    <line x1="180" y1="320" x2="174" y2="330"/>
    <line x1="220" y1="320" x2="214" y2="330"/>
    <line x1="260" y1="320" x2="254" y2="330"/>
    <line x1="300" y1="320" x2="294" y2="330"/>
  </g>

  <!-- Shared-question label kept above the caption overlay -->
  <g>
    <rect x="72" y="286" width="176" height="27" fill="#0F0A05" opacity="0.88"/>
    <text x="160" y="297" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="6.4" fill="#DFC98A" letter-spacing="0.1em">ONE GROUND, ONE QUESTION</text>
    <text x="160" y="309" text-anchor="middle" font-family="Noto Serif,serif" font-size="7.2" font-style="italic" fill="#E8DECA">Which kind are we building today?</text>
  </g>
</svg>`;

  Object.assign(window.ARCH_SVGS, { closing: CLOSING_COMPOSITE });

})();

