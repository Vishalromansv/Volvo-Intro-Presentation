'use client';

import React from 'react';

// =========================================================================
// 1. THANOS INFINITY GAUNTLET (LOCKED TO SAFE DIMENSIONS)
// =========================================================================

export function InfinityGauntletSVG({
  className = "w-44 h-44",
  onClick
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{ width: '160px', height: '220px', margin: '0 auto' }}
      className={`${className} cursor-pointer group relative flex items-center justify-center`}
    >
      <svg
        viewBox="0 0 160 220"
        style={{ width: '100%', height: '100%' }}
        className="drop-shadow-[0_0_35px_rgba(255,215,0,0.5)] group-hover:scale-105 transition-transform duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="uruGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff3b0" />
            <stop offset="30%" stopColor="#e0a926" />
            <stop offset="70%" stopColor="#9a6e14" />
            <stop offset="100%" stopColor="#3d2a04" />
          </linearGradient>
          <radialGradient id="gemYellow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#ffea00" />
            <stop offset="100%" stopColor="#d4a000" />
          </radialGradient>
          <radialGradient id="gemBlue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#00b4d8" />
            <stop offset="100%" stopColor="#0077b6" />
          </radialGradient>
          <radialGradient id="gemPurple" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#9d4edd" />
            <stop offset="100%" stopColor="#5a189a" />
          </radialGradient>
          <radialGradient id="gemRed" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#e63946" />
            <stop offset="100%" stopColor="#9b2226" />
          </radialGradient>
          <radialGradient id="gemOrange" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#f77f00" />
            <stop offset="100%" stopColor="#d62828" />
          </radialGradient>
          <radialGradient id="gemGreen" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#2ec4b6" />
            <stop offset="100%" stopColor="#0e7368" />
          </radialGradient>
        </defs>

        <path d="M38 215 L122 215 L132 145 L28 145 Z" fill="url(#uruGold)" stroke="#ffd700" strokeWidth="2.5" />
        <path d="M48 200 L112 200 M52 175 L108 175" stroke="#5c4106" strokeWidth="2" strokeLinecap="round" />

        <path d="M28 145 L132 145 L136 78 L24 78 Z" fill="url(#uruGold)" stroke="#ffe066" strokeWidth="2" />
        <path d="M22 85 L36 30 L54 36 L50 80 Z" fill="url(#uruGold)" stroke="#b3820e" strokeWidth="1.5" />
        <path d="M52 78 L56 20 L74 22 L72 78 Z" fill="url(#uruGold)" stroke="#b3820e" strokeWidth="1.5" />
        <path d="M74 78 L78 14 L96 16 L94 78 Z" fill="url(#uruGold)" stroke="#b3820e" strokeWidth="1.5" />
        <path d="M96 78 L100 22 L116 26 L114 78 Z" fill="url(#uruGold)" stroke="#b3820e" strokeWidth="1.5" />
        <path d="M116 78 L122 40 L136 44 L132 78 Z" fill="url(#uruGold)" stroke="#b3820e" strokeWidth="1.5" />

        <polygon points="80,102 92,114 80,128 68,114" fill="url(#gemYellow)" stroke="#ffffff" strokeWidth="1.5" className="animate-pulse" />
        <circle cx="65" cy="76" r="6" fill="url(#gemBlue)" stroke="#ffffff" strokeWidth="1" />
        <circle cx="85" cy="74" r="6" fill="url(#gemPurple)" stroke="#ffffff" strokeWidth="1" />
        <circle cx="105" cy="77" r="6" fill="url(#gemRed)" stroke="#ffffff" strokeWidth="1" />
        <circle cx="124" cy="82" r="5.5" fill="url(#gemOrange)" stroke="#ffffff" strokeWidth="1" />
        <circle cx="34" cy="90" r="5.5" fill="url(#gemGreen)" stroke="#ffffff" strokeWidth="1" />
      </svg>
    </div>
  );
}

// =========================================================================
// 2. THE 10 CHARACTER FIGURES
// =========================================================================

export function HulkFigureSVG({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 220"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* --- DROP SHADOW / BASELINE --- */}
      <ellipse cx="160" cy="188" rx="140" ry="8" fill="#000000" opacity="0.4" />

      {/* --- REAR 4-AXLE WHEEL ASSEMBLIES --- */}
      {/* Wheel 1 (Rear-most) */}
      <g transform="translate(75, 168)">
        <circle cx="0" cy="0" r="23" fill="#1e293b" stroke="#111111" strokeWidth="4" />
        <circle cx="0" cy="0" r="17" fill="#334155" stroke="#111111" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="10" fill="#f8fafc" stroke="#111111" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="4.5" fill="#111111" />
        <circle cx="0" cy="0" r="2" fill="#ffffff" />
      </g>

      {/* Wheel 2 */}
      <g transform="translate(132, 168)">
        <circle cx="0" cy="0" r="23" fill="#1e293b" stroke="#111111" strokeWidth="4" />
        <circle cx="0" cy="0" r="17" fill="#334155" stroke="#111111" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="10" fill="#f8fafc" stroke="#111111" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="4.5" fill="#111111" />
        <circle cx="0" cy="0" r="2" fill="#ffffff" />
      </g>

      {/* Wheel 3 */}
      <g transform="translate(195, 168)">
        <circle cx="0" cy="0" r="23" fill="#1e293b" stroke="#111111" strokeWidth="4" />
        <circle cx="0" cy="0" r="17" fill="#334155" stroke="#111111" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="10" fill="#f8fafc" stroke="#111111" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="4.5" fill="#111111" />
        <circle cx="0" cy="0" r="2" fill="#ffffff" />
      </g>

      {/* Wheel 4 (Front Steer) */}
      <g transform="translate(262, 168)">
        <circle cx="0" cy="0" r="23" fill="#1e293b" stroke="#111111" strokeWidth="4" />
        <circle cx="0" cy="0" r="17" fill="#334155" stroke="#111111" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="10" fill="#f8fafc" stroke="#111111" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="4.5" fill="#111111" />
        <circle cx="0" cy="0" r="2" fill="#ffffff" />
      </g>

      {/* --- CHASSIS FRAME & FUEL TANK --- */}
      <rect x="155" y="142" width="55" height="18" rx="4" fill="#1e293b" stroke="#111111" strokeWidth="3.5" />
      <path d="M40 148 L285 148" stroke="#111111" strokeWidth="6" strokeLinecap="round" />

      {/* --- DUMP BED (HARDOX CHARCOAL SLATE WITH 3D PANELS) --- */}
      <path
        d="M30 142 
           L22 48 
           L265 32 
           L258 142 
           Z"
        fill="#334155"
        stroke="#111111"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />

      {/* Dump Bed Ribbed Side Panels */}
      <path
        d="M65 142 L72 45 
           M105 142 L112 42
           M145 142 L152 40
           M185 142 L192 38
           M225 142 L232 36"
        stroke="#111111"
        strokeWidth="3.5"
      />

      {/* VOLVO LOGO TEXT ON DUMP BED */}
      <text x="142" y="95" fill="#ffffff" fontSize="18" fontFamily="sans-serif" fontWeight="900" letterSpacing="3">VOLVO</text>

      {/* High-Vis Yellow Reflective Side Safety Stripe */}
      <path
        d="M26 122 L261 106"
        stroke="#facc15"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M26 122 L261 106"
        stroke="#111111"
        strokeWidth="6"
        strokeDasharray="14 14"
        strokeLinecap="round"
      />

      {/* Canopy Overhang Hood */}
      <path
        d="M190 39 L272 24 L278 40 L190 44 Z"
        fill="#1e293b"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* --- HYDRAULIC HOIST CYLINDER & EXHAUST STACK --- */}
      <rect x="202" y="45" width="12" height="95" rx="3" fill="#cbd5e1" stroke="#111111" strokeWidth="3.5" />
      <rect x="198" y="72" width="20" height="28" rx="2" fill="#94a3b8" stroke="#111111" strokeWidth="3" />

      {/* --- VOLVO FMX CABIN (INDUSTRIAL YELLOW) --- */}
      <path
        d="M210 148 
           L210 82 
           C210 68 222 52 240 48 
           L278 48 
           L295 90 
           L295 148 
           Z"
        fill="#ffb800"
        stroke="#111111"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />

      {/* Dark Bumper & Front Grille Assembly */}
      <path
        d="M285 90 L308 95 L308 148 L255 148 Z"
        fill="#1e293b"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Volvo Diagonal Iron Mark Bar on Grille */}
      <path
        d="M288 112 L302 122"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="295" cy="117" r="5" fill="none" stroke="#ffffff" strokeWidth="2.5" />

      {/* Headlight Cluster */}
      <rect x="294" y="102" width="10" height="18" rx="2" fill="#00f5d4" stroke="#111111" strokeWidth="2" />

      {/* Windshield */}
      <path
        d="M220 80 L258 78 L268 112 L218 112 Z"
        fill="#cbd5e1"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M220 80 L258 78 L268 112 L218 112 Z"
        fill="#0284c7"
        opacity="0.75"
      />

      {/* Side Door & Window */}
      <path
        d="M214 80 L214 135 L272 135 L272 118 L268 80 Z"
        fill="#0284c7"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
        opacity="0.85"
      />

      {/* Side Door Handle & Mirror */}
      <rect x="258" y="118" width="8" height="4" rx="1" fill="#111111" />
      <rect x="268" y="65" width="7" height="18" rx="2" fill="#111111" stroke="#111111" strokeWidth="1.5" />

      {/* Rooftop Amber Beacon Lights */}
      <rect x="222" y="32" width="10" height="8" rx="2" fill="#fbbf24" stroke="#111111" strokeWidth="2" />
      <rect x="252" y="28" width="12" height="10" rx="2" fill="#fbbf24" stroke="#111111" strokeWidth="2" />
    </svg>
  );
}

export function ThorFigureSVG({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 480"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Chainmail Hatch Pattern for Sleeves */}
        <pattern id="thorChainmail" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="#161818" strokeWidth="1.2" />
          <line x1="0" y1="0" x2="7" y2="0" stroke="#161818" strokeWidth="1.2" />
        </pattern>
      </defs>

      {/* ================= 1. RED CAPE (BACKGROUND) ================= */}
      <path
        d="M110 245 
           C75 270 65 390 70 435 
           C110 445 140 430 180 430 
           C220 430 250 445 290 435 
           C295 390 285 270 250 245 
           Z"
        fill="#7b1928"
        stroke="#151717"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Cape Folds */}
      <path d="M95 360 C85 410 75 435 70 435" stroke="#500f19" strokeWidth="3" fill="none" />
      <path d="M265 360 C275 410 285 435 290 435" stroke="#500f19" strokeWidth="3" fill="none" />

      {/* ================= 2. MJOLNIR STRAP (BEHIND HAND) ================= */}
      <path
        d="M66 360 
           C66 385 58 415 68 415 
           C78 415 76 385 73 360"
        fill="#232626"
        stroke="#151717"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* ================= 3. LEGS & BOOTS ================= */}
      {/* Pants Base */}
      <path
        d="M130 365 
           L118 430 
           L170 430 
           L180 395 
           L190 430 
           L242 430 
           L230 365 
           Z"
        fill="#262b2a"
        stroke="#151717"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Knee Armor Pads */}
      <path d="M124 400 Q145 392 166 400" stroke="#555d5b" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M194 400 Q215 392 236 400" stroke="#555d5b" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M122 418 Q145 410 168 418" stroke="#151717" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M192 418 Q215 410 238 418" stroke="#151717" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Left Boot */}
      <path
        d="M120 424 
           L102 448 
           C98 462 110 466 128 466 
           C148 466 168 466 172 458 
           L168 424 
           Z"
        fill="#2b3130"
        stroke="#151717"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M102 448 Q135 440 168 448" stroke="#151717" strokeWidth="3" fill="none" />

      {/* Right Boot */}
      <path
        d="M192 424 
           L188 458 
           C192 466 212 466 232 466 
           C250 466 262 462 258 448 
           L240 424 
           Z"
        fill="#2b3130"
        stroke="#151717"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M192 448 Q225 440 258 448" stroke="#151717" strokeWidth="3" fill="none" />

      {/* ================= 4. TORSO & CHEST ARMOR ================= */}
      {/* Red Collar */}
      <path d="M142 248 C160 268 200 268 218 248 Z" fill="#9e1f32" stroke="#151717" strokeWidth="3" />

      {/* Armored Vest Silhouette */}
      <path
        d="M136 260 
           L138 368 
           L222 368 
           L224 260 
           Z"
        fill="#323837"
        stroke="#151717"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Center Armor Plate Chevron Facets */}
      <path d="M180 280 L166 312 L180 340 L194 312 Z" fill="#464e4c" stroke="#151717" strokeWidth="3" />
      <line x1="180" y1="280" x2="180" y2="340" stroke="#151717" strokeWidth="2.5" />

      {/* Six Silver Armor Discs (Medallions) */}
      {/* Top Left Disc */}
      <circle cx="154" cy="285" r="15" fill="#717a78" stroke="#151717" strokeWidth="3.5" />
      <circle cx="154" cy="285" r="10" fill="#4f5654" />
      {/* Top Right Disc */}
      <circle cx="206" cy="285" r="15" fill="#717a78" stroke="#151717" strokeWidth="3.5" />
      <circle cx="206" cy="285" r="10" fill="#4f5654" />

      {/* Mid Left Disc */}
      <circle cx="158" cy="324" r="11" fill="#717a78" stroke="#151717" strokeWidth="3" />
      <circle cx="158" cy="324" r="7" fill="#4f5654" />
      {/* Mid Right Disc */}
      <circle cx="202" cy="324" r="11" fill="#717a78" stroke="#151717" strokeWidth="3" />
      <circle cx="202" cy="324" r="7" fill="#4f5654" />

      {/* Bottom Left Disc */}
      <circle cx="162" cy="354" r="9" fill="#717a78" stroke="#151717" strokeWidth="3" />
      <circle cx="162" cy="354" r="5.5" fill="#4f5654" />
      {/* Bottom Right Disc */}
      <circle cx="198" cy="354" r="9" fill="#717a78" stroke="#151717" strokeWidth="3" />
      <circle cx="198" cy="354" r="5.5" fill="#4f5654" />

      {/* Belt with Blue Trim Chevron Inlay */}
      <path d="M140 364 L220 364 L216 384 L144 384 Z" fill="#202423" stroke="#151717" strokeWidth="3.5" />
      <polygon points="170,366 190,366 186,380 174,380" fill="#1b2228" stroke="#3a6b8c" strokeWidth="2.5" />

      {/* ================= 5. ARMS & SLEEVES ================= */}
      {/* Left Arm Chainmail (Viewer's Left) */}
      <path d="M138 274 L98 304 L114 340 L140 318 Z" fill="#303736" stroke="#151717" strokeWidth="3.5" />
      <path d="M138 274 L98 304 L114 340 L140 318 Z" fill="url(#thorChainmail)" />
      {/* Left Bracer */}
      <path d="M96 304 L86 332 L112 342 L116 322 Z" fill="#444c4b" stroke="#151717" strokeWidth="3.5" />

      {/* Right Arm Chainmail (Viewer's Right) */}
      <path d="M222 274 L262 304 L246 340 L220 318 Z" fill="#303736" stroke="#151717" strokeWidth="3.5" />
      <path d="M222 274 L262 304 L246 340 L220 318 Z" fill="url(#thorChainmail)" />
      {/* Right Bracer */}
      <path d="M264 304 L274 332 L248 342 L244 322 Z" fill="#444c4b" stroke="#151717" strokeWidth="3.5" />

      {/* Right Fist (Viewer's Right) */}
      <path
        d="M262 316 
           C276 308 288 322 288 334 
           C288 348 276 358 264 354 
           C256 350 252 334 256 324 
           Z"
        fill="#f6d2c4"
        stroke="#151717"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Clenched Finger Lines */}
      <path d="M272 322 C276 326 276 336 270 340" stroke="#151717" strokeWidth="2.5" fill="none" />
      <path d="M280 326 C284 332 284 342 276 346" stroke="#151717" strokeWidth="2.5" fill="none" />
      <path d="M264 336 C264 344 270 348 274 350" stroke="#151717" strokeWidth="2.5" fill="none" />

      {/* ================= 6. MJOLNIR (HAMMER) ================= */}
      {/* Handle Shaft */}
      <path d="M47 288 L72 355" stroke="#151717" strokeWidth="16" strokeLinecap="round" />
      <path d="M47 288 L72 355" stroke="#4a504f" strokeWidth="10" strokeLinecap="round" />

      {/* Left Hand Gripping Handle (Viewer's Left) */}
      <path
        d="M62 324 
           C62 310 88 308 94 326 
           C98 342 88 356 72 354 
           C62 350 58 338 62 324 
           Z"
        fill="#f6d2c4"
        stroke="#151717"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Finger Lines around handle */}
      <path d="M72 315 C82 318 84 328 76 332" stroke="#151717" strokeWidth="2.5" fill="none" />
      <path d="M76 328 C86 332 86 342 78 346" stroke="#151717" strokeWidth="2.5" fill="none" />
      <path d="M66 338 C74 344 80 348 76 352" stroke="#151717" strokeWidth="2.5" fill="none" />

      {/* Hammer Head with Beveled Facets */}
      {/* Outer Silhouette */}
      <polygon points="12,252 68,235 83,280 27,298" fill="#586060" stroke="#151717" strokeWidth="4" strokeLinejoin="round" />
      {/* Front Face Plate */}
      <polygon points="20,256 62,243 73,276 32,290" fill="#717a79" stroke="#151717" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Side Chamfers */}
      <polygon points="12,252 20,256 32,290 27,298" fill="#4b5251" />
      <polygon points="68,235 62,243 73,276 83,280" fill="#848d8c" />

      {/* ================= 7. FACE & HEAD ================= */}
      {/* Face Base */}
      <path
        d="M102 140 
           C90 190 98 245 145 256 
           C165 260 195 260 215 256 
           C262 245 270 190 258 140 
           Z"
        fill="#f6d2c4"
        stroke="#151717"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Blonde Beard & Mustache Base */}
      <path
        d="M124 235 
           C138 205 160 205 180 205 
           C200 205 222 205 236 235 
           C226 256 200 262 180 262 
           C160 262 134 256 124 235 
           Z"
        fill="#c89f53"
        stroke="#151717"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Open Mouth / Gritted Snarl */}
      <path
        d="M152 246 
           C164 232 176 244 180 242 
           C184 244 196 232 208 246 
           C198 256 162 256 152 246 
           Z"
        fill="#ffffff"
        stroke="#151717"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Mustache Upper Lip Notch Line */}
      <path d="M165 236 Q180 245 195 236" stroke="#151717" strokeWidth="2.5" fill="none" />

      {/* Blonde Eyebrows (Determined Angle) */}
      <polygon points="106,160 148,150 146,160 114,166" fill="#c89f53" stroke="#151717" strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="254,160 212,150 214,160 246,166" fill="#c89f53" stroke="#151717" strokeWidth="2.5" strokeLinejoin="round" />

      {/* Big Chibi Eyes */}
      {/* Left Eye */}
      <ellipse cx="128" cy="178" rx="14" ry="18" fill="#121313" stroke="#151717" strokeWidth="3" />
      <circle cx="122" cy="172" r="5.5" fill="#ffffff" />
      {/* Right Eye */}
      <ellipse cx="232" cy="178" rx="14" ry="18" fill="#121313" stroke="#151717" strokeWidth="3" />
      <circle cx="226" cy="172" r="5.5" fill="#ffffff" />

      {/* Nose bridge & Under-eye contour lines */}
      <path d="M120 198 Q128 204 136 200" stroke="#d8a899" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M224 200 Q232 204 240 198" stroke="#d8a899" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M176 194 Q180 198 184 194" stroke="#d8a899" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* ================= 8. WINGED HELMET (FOREGROUND) ================= */}
      {/* Left Wing (3 Stepped Feathers) */}
      <path
        d="M106 130 
           L68 140 
           L56 128 
           L84 94 
           L58 102 
           L62 60 
           L88 64 
           L72 16 
           C90 40 98 75 106 95 
           Z"
        fill="#666e6d"
        stroke="#151717"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Left Wing Inner Plate Creases */}
      <line x1="84" y1="94" x2="100" y2="108" stroke="#151717" strokeWidth="3" />
      <line x1="88" y1="64" x2="102" y2="82" stroke="#151717" strokeWidth="3" />

      {/* Right Wing (3 Stepped Feathers) */}
      <path
        d="M254 130 
           L292 140 
           L304 128 
           L276 94 
           L302 102 
           L298 60 
           L272 64 
           L288 16 
           C270 40 262 75 254 95 
           Z"
        fill="#666e6d"
        stroke="#151717"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Right Wing Inner Plate Creases */}
      <line x1="276" y1="94" x2="260" y2="108" stroke="#151717" strokeWidth="3" />
      <line x1="272" y1="64" x2="258" y2="82" stroke="#151717" strokeWidth="3" />

      {/* Helmet Dome Silhouette */}
      <path
        d="M100 130 
           C94 65 130 25 180 25 
           C230 25 266 65 260 130 
           L238 130 
           C246 80 220 50 180 50 
           C140 50 114 80 122 130 
           Z"
        fill="#5a6261"
        stroke="#151717"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Helmet Center Ridge Plate */}
      <path
        d="M166 26 
           L194 26 
           L200 95 
           L180 112 
           L160 95 
           Z"
        fill="#757e7d"
        stroke="#151717"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <line x1="180" y1="26" x2="180" y2="112" stroke="#151717" strokeWidth="3" />

      {/* Helmet Brow Band with Center V-Peak */}
      <path
        d="M102 110 
           L150 106 
           L180 130 
           L210 106 
           L258 110 
           L256 135 
           L204 135 
           L180 160 
           L156 135 
           L104 135 
           Z"
        fill="#666e6d"
        stroke="#151717"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Left Cheek Guard */}
      <path
        d="M104 132 
           L146 132 
           L152 148 
           L124 205 
           C118 250 128 266 128 266 
           C102 245 92 195 104 132 
           Z"
        fill="#6b7473"
        stroke="#151717"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Right Cheek Guard */}
      <path
        d="M256 132 
           L214 132 
           L208 148 
           L236 205 
           C242 250 232 266 232 266 
           C258 245 268 195 256 132 
           Z"
        fill="#6b7473"
        stroke="#151717"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IronManFigureSVG({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ================= 1. RAISED BACK ARM (VIEWER'S RIGHT) ================= */}
      {/* Shoulder / Bicep */}
      <path
        d="M228 155 Q252 150 270 162 L260 185 Q235 180 220 172 Z"
        fill="#e61c24"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Gauntlet Forearm */}
      <path
        d="M260 160 L288 168 C294 176 292 195 280 200 L256 186 Z"
        fill="#e61c24"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Gauntlet Accent Ring */}
      <path d="M262 165 C268 180 262 192 256 195" stroke="#111111" strokeWidth="3" fill="none" />
      {/* Clenched Fist */}
      <path
        d="M276 168 
           C292 160 306 174 300 190 
           C294 204 278 206 268 196 
           Z"
        fill="#e61c24"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Curled Fingers / Thumb */}
      <path d="M280 186 C286 190 286 198 278 200" stroke="#111111" strokeWidth="3" fill="none" />
      <path d="M286 176 C294 182 294 190 286 194" stroke="#111111" strokeWidth="3" fill="none" />

      {/* ================= 2. RIGHT LEG & KNEE (VIEWER'S RIGHT) ================= */}
      {/* Thigh (Gold Armor Plate) */}
      <path
        d="M174 274 Q195 268 214 286 L226 332 Q196 348 174 330 Z"
        fill="#ffcc00"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M188 274 L204 334" stroke="#e5a800" strokeWidth="3" />

      {/* Red Knee Armor Cap */}
      <path
        d="M214 288 L238 304 L224 338 L206 326 Z"
        fill="#e61c24"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Planted Boot */}
      <path
        d="M172 334 
           L174 372 
           C174 382 246 382 246 372 
           L242 336 
           C226 330 208 330 194 338 
           Z"
        fill="#e61c24"
        stroke="#111111"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      <path d="M175 354 Q208 348 243 354" stroke="#111111" strokeWidth="3" fill="none" />
      <path d="M188 352 L188 376" stroke="#111111" strokeWidth="2.5" />

      {/* ================= 3. TORSO & RIBBED ABDOMEN ================= */}
      {/* Chest Red Silhouette */}
      <path
        d="M148 232 L192 238 C202 254 198 284 184 290 L148 290 Z"
        fill="#e61c24"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Chest Vents & Arc Reactor Slits */}
      <path d="M166 252 L165 268" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
      {/* Glowing Cyan Slit */}
      <rect x="174" y="248" width="7" height="20" rx="3.5" fill="#8eedfc" stroke="#111111" strokeWidth="2.5" />
      <path d="M188 252 L187 268" stroke="#111111" strokeWidth="3" strokeLinecap="round" />

      {/* Ribbed Abdominal Armor Bands */}
      <path d="M148 274 L185 272 L182 284 L148 286 Z" fill="#e61c24" stroke="#111111" strokeWidth="3" strokeLinejoin="round" />
      <path d="M148 286 L181 284 L178 296 L148 298 Z" fill="#e61c24" stroke="#111111" strokeWidth="3" strokeLinejoin="round" />
      <path d="M148 298 L176 296 L172 308 L148 310 Z" fill="#e61c24" stroke="#111111" strokeWidth="3" strokeLinejoin="round" />

      {/* ================= 4. LEFT EXTENDED LEG (VIEWER'S LEFT) ================= */}
      {/* Outer Leg Base */}
      <path
        d="M118 262 
           L72 272 
           C58 290 38 328 22 368 
           C46 384 100 382 120 370 
           L124 300 
           Z"
        fill="#e61c24"
        stroke="#111111"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />

      {/* Knee Circular Joint with Crescent Cutout */}
      <circle cx="86" cy="285" r="14" fill="#e61c24" stroke="#111111" strokeWidth="3.5" />
      <path d="M78 285 C78 276 94 276 94 285 C94 294 78 294 78 285" fill="#ffcc00" />

      {/* Geometric Gold Shin & Thigh Plates */}
      <polygon points="66,295 86,290 80,324 58,318" fill="#ffcc00" stroke="#111111" strokeWidth="3" strokeLinejoin="round" />
      <polygon points="85,304 116,292 118,324 92,336" fill="#ffcc00" stroke="#111111" strokeWidth="3" strokeLinejoin="round" />
      <polygon points="90,332 116,324 112,348 84,350" fill="#ffcc00" stroke="#111111" strokeWidth="3" strokeLinejoin="round" />

      {/* Outstretched Red Boot */}
      <path
        d="M24 366 
           C24 350 48 318 72 314 
           L102 340 
           L96 374 
           C65 382 36 380 24 366 
           Z"
        fill="#e61c24"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Boot Sole Plate & Toe Segment */}
      <path d="M58 350 L84 372" stroke="#111111" strokeWidth="3" />
      <path d="M30 366 Q65 368 98 368" stroke="#111111" strokeWidth="3.5" fill="none" />

      {/* ================= 5. FRONT ARM & HAND (GROUND TOUCHDOWN) ================= */}
      {/* Shoulder Pauldron */}
      <path
        d="M110 238 
           C118 226 150 226 154 246 
           C156 264 144 276 122 276 
           C112 270 106 252 110 238 
           Z"
        fill="#e61c24"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M126 230 C136 242 136 260 128 274" stroke="#111111" strokeWidth="3" fill="none" />

      {/* Forearm (Gold Core Plate) */}
      <path
        d="M116 268 
           L150 268 
           L150 348 
           L116 348 
           Z"
        fill="#ffcc00"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path d="M116 312 L150 312" stroke="#111111" strokeWidth="3" />
      <polygon points="128,285 146,285 146,305 136,300" fill="#e61c24" stroke="#111111" strokeWidth="2.5" />

      {/* Lower Gauntlet Red Cuff */}
      <rect x="115" y="316" width="35" height="34" fill="#e61c24" stroke="#111111" strokeWidth="3.5" />

      {/* Fingers Planted Flat on Floor */}
      <rect x="110" y="352" width="10" height="24" rx="4" fill="#e61c24" stroke="#111111" strokeWidth="3" />
      <rect x="120" y="352" width="10" height="26" rx="4" fill="#e61c24" stroke="#111111" strokeWidth="3" />
      <rect x="130" y="352" width="10" height="26" rx="4" fill="#e61c24" stroke="#111111" strokeWidth="3" />
      <rect x="140" y="352" width="10" height="24" rx="4" fill="#e61c24" stroke="#111111" strokeWidth="3" />
      {/* Thumb Folded Side */}
      <path d="M150 354 C158 350 166 358 162 366 C158 370 150 368 150 360 Z" fill="#e61c24" stroke="#111111" strokeWidth="3" />

      {/* Finger Knuckle Crease Lines */}
      <line x1="110" y1="362" x2="150" y2="362" stroke="#111111" strokeWidth="2.5" />

      {/* ================= 6. BIG CHIBI HELMET & FACEPLATE ================= */}
      {/* Red Helmet Base Dome */}
      <path
        d="M60 120 
           C54 44 90 10 156 10 
           C222 10 256 44 250 120 
           C248 165 224 210 156 238 
           C86 210 64 165 60 120 
           Z"
        fill="#e61c24"
        stroke="#111111"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Forehead Arc Seam */}
      <path d="M96 44 Q156 36 216 44" stroke="#111111" strokeWidth="3.5" fill="none" />

      {/* Ear Capsule Pods */}
      {/* Left Ear */}
      <path d="M54 125 C52 120 68 120 68 125 L66 170 C66 175 52 175 52 170 Z" fill="#e61c24" stroke="#111111" strokeWidth="3.5" />
      {/* Right Ear */}
      <path d="M242 125 C240 120 256 120 256 125 L254 170 C254 175 240 175 240 170 Z" fill="#e61c24" stroke="#111111" strokeWidth="3.5" />

      {/* GOLD FACEPLATE (ACCURATE WRAPAROUND SHAPE) */}
      <path
        d="M92 48 
           L118 42 
           L135 116 
           L176 116 
           L194 42 
           L220 48 
           L236 124 
           L226 164 
           L200 206 
           L170 224 
           L140 224 
           L112 206 
           L84 164 
           L74 124 
           Z"
        fill="#ffcc00"
        stroke="#111111"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />

      {/* Red Center Forehead Drop Panel */}
      <path
        d="M118 42 
           Q156 38 194 42 
           L176 116 
           L135 116 
           Z"
        fill="#e61c24"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Cheeks Inset & Angle Lines */}
      <path d="M84 164 L106 176" stroke="#111111" strokeWidth="3" />
      <path d="M226 164 L204 176" stroke="#111111" strokeWidth="3" />

      {/* GLOWING CYAN EYE SLITS */}
      {/* Left Eye Slit */}
      <polygon
        points="86,156 142,166 138,176 88,170"
        fill="#8eedfc"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <line x1="88" y1="168" x2="138" y2="174" stroke="#48b7c7" strokeWidth="2" />

      {/* Right Eye Slit */}
      <polygon
        points="168,166 224,156 222,170 172,176"
        fill="#8eedfc"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <line x1="172" y1="174" x2="222" y2="168" stroke="#48b7c7" strokeWidth="2" />

      {/* Nose & Mouth Seams */}
      <path d="M140 210 Q155 208 170 210" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <line x1="144" y1="220" x2="166" y2="220" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function CapFigureSVG({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ================= 1. HELMET WINGS (BEHIND) ================= */}
      {/* Left Wing (Viewer's Left) */}
      <path
        d="M68 96 
           C46 72 32 40 38 18 
           C48 34 54 44 58 44 
           C50 30 42 22 46 12 
           C58 26 68 38 72 38 
           C68 24 64 16 70 8 
           C82 28 88 54 94 76 
           Z"
        fill="#ffffff"
        stroke="#111215"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Left Wing Inner Feather Lines */}
      <path d="M58 44 C66 60 76 76 82 86" stroke="#d5dbe0" strokeWidth="2.5" fill="none" />
      <path d="M72 38 C78 52 84 66 88 78" stroke="#d5dbe0" strokeWidth="2.5" fill="none" />

      {/* Right Wing (Viewer's Right) */}
      <path
        d="M252 96 
           C274 72 288 40 282 18 
           C272 34 266 44 262 44 
           C270 30 278 22 274 12 
           C262 26 252 38 248 38 
           C252 24 256 16 250 8 
           C238 28 232 54 226 76 
           Z"
        fill="#ffffff"
        stroke="#111215"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Right Wing Inner Feather Lines */}
      <path d="M262 44 C254 60 244 76 238 86" stroke="#d5dbe0" strokeWidth="2.5" fill="none" />
      <path d="M248 38 C242 52 236 66 232 78" stroke="#d5dbe0" strokeWidth="2.5" fill="none" />

      {/* ================= 2. EARS & LOWER FACE (SKIN) ================= */}
      {/* Left Ear */}
      <path
        d="M66 138 C48 138 42 162 48 180 C54 196 68 196 74 186"
        fill="#fed8b1"
        stroke="#111215"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M54 154 C52 164 56 174 64 176" stroke="#111215" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Right Ear */}
      <path
        d="M254 138 C272 138 278 162 272 180 C266 196 252 196 246 186"
        fill="#fed8b1"
        stroke="#111215"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M266 154 C268 164 264 174 256 176" stroke="#111215" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Chubby Lower Face & Chin Base */}
      <path
        d="M68 140 
           C62 196 88 238 160 238 
           C232 238 258 196 252 140 
           Z"
        fill="#fed8b1"
        stroke="#111215"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />

      {/* Cute Chibi Smile */}
      <path
        d="M144 198 Q160 214 176 198"
        stroke="#111215"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* ================= 3. LEGS & BOOTS ================= */}
      {/* Pants Base */}
      <path
        d="M106 288 
           L84 346 
           L142 346 
           L160 316 
           L178 346 
           L236 346 
           L214 288 
           Z"
        fill="#1ba0f2"
        stroke="#111215"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Crotch Center Seam */}
      <line x1="160" y1="298" x2="160" y2="316" stroke="#111215" strokeWidth="3" />

      {/* Left Boot (Viewer's Left) */}
      {/* Cuff */}
      <path
        d="M74 346 C74 336 148 336 148 346 L146 364 C146 374 76 374 74 364 Z"
        fill="#e62029"
        stroke="#111215"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Sole & Foot */}
      <path
        d="M76 364 
           L62 380 
           C58 396 74 402 100 402 
           C126 402 144 400 148 388 
           L146 364 
           Z"
        fill="#e62029"
        stroke="#111215"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M72 386 Q108 380 144 386" stroke="#ff6b6b" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Right Boot (Viewer's Right) */}
      {/* Cuff */}
      <path
        d="M172 346 C172 336 246 336 246 346 L244 364 C244 374 174 374 172 364 Z"
        fill="#e62029"
        stroke="#111215"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Sole & Foot */}
      <path
        d="M174 364 
           L172 388 
           C176 400 194 402 220 402 
           C246 402 262 396 258 380 
           L244 364 
           Z"
        fill="#e62029"
        stroke="#111215"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M176 386 Q212 380 248 386" stroke="#ff6b6b" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* ================= 4. TORSO & BELT ================= */}
      {/* Blue Upper Chest */}
      <path
        d="M96 220 L78 274 L242 274 L224 220 Z"
        fill="#1ba0f2"
        stroke="#111215"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* White 5-Point Chest Star */}
      <polygon
        points="160,240 165,254 180,254 168,263 172,277 160,268 148,277 152,263 140,254 155,254"
        fill="#ffffff"
        stroke="#111215"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Midriff Red & White Stripes */}
      <rect x="100" y="272" width="120" height="24" fill="#ffffff" stroke="#111215" strokeWidth="3.5" />
      {/* Red Stripes */}
      <rect x="100" y="272" width="24" height="24" fill="#e62029" stroke="#111215" strokeWidth="3" />
      <rect x="148" y="272" width="24" height="24" fill="#e62029" stroke="#111215" strokeWidth="3" />
      <rect x="196" y="272" width="24" height="24" fill="#e62029" stroke="#111215" strokeWidth="3" />

      {/* Utility Belt */}
      <rect x="98" y="296" width="124" height="18" rx="2" fill="#ffffff" stroke="#111215" strokeWidth="3.5" />
      {/* Blue Center Buckle */}
      <rect x="150" y="294" width="20" height="22" rx="2" fill="#1ba0f2" stroke="#111215" strokeWidth="3" />

      {/* ================= 5. RIGHT ARM & CLENCHED FIST ================= */}
      {/* White Shoulder Sleeve Cap */}
      <path
        d="M98 220 L74 246 L100 274 L114 244 Z"
        fill="#ffffff"
        stroke="#111215"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Blue Bicep */}
      <path
        d="M74 246 L64 274 L88 284 L100 274 Z"
        fill="#1ba0f2"
        stroke="#111215"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Red Glove Cuff Ring */}
      <path
        d="M62 274 C50 274 50 292 62 298 L88 298 C100 292 100 274 88 274 Z"
        fill="#e62029"
        stroke="#111215"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Red Clenched Fist */}
      <path
        d="M64 286 
           C46 286 32 300 36 320 
           C40 338 58 344 74 340 
           C86 336 94 324 90 306 
           L84 286 
           Z"
        fill="#e62029"
        stroke="#111215"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Knuckle & Finger Creases */}
      <path d="M40 310 Q54 316 66 308" stroke="#111215" strokeWidth="3" fill="none" />
      <path d="M42 324 Q56 330 68 322" stroke="#111215" strokeWidth="3" fill="none" />
      <path d="M50 336 Q64 340 74 332" stroke="#111215" strokeWidth="3" fill="none" />
      {/* Thumb folded over */}
      <path d="M60 294 C68 290 82 296 82 308 C82 316 70 318 64 310 Z" fill="#e62029" stroke="#111215" strokeWidth="3" />

      {/* ================= 6. LEFT ARM SLEEVE (BEHIND SHIELD) ================= */}
      <path
        d="M222 220 L246 246 L230 274 L212 244 Z"
        fill="#ffffff"
        stroke="#111215"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* ================= 7. BLUE HELMET & COWL ================= */}
      {/* Big Helmet Dome */}
      <path
        d="M60 120 
           C52 42 92 8 160 8 
           C228 8 268 42 260 120 
           C260 148 248 184 224 200 
           C200 210 180 182 160 182 
           C140 182 120 210 96 200 
           C72 184 60 148 60 120 
           Z"
        fill="#1ba0f2"
        stroke="#111215"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Top Gloss Highlight on Dome */}
      <path
        d="M92 48 C112 24 145 18 178 18 C196 18 214 22 228 32"
        stroke="#5ec4ff"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* BOLD CAPITAL "A" (FOREHEAD EMBLEM) */}
      <polygon
        points="160,30 134,106 156,106 163,84 179,84 186,106 208,106 182,30"
        fill="#ffffff"
        stroke="#111215"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Triangle cut in "A" */}
      <polygon
        points="160,48 168,70 152,70"
        fill="#1ba0f2"
        stroke="#111215"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Mask Brow Center Dip Between Eyes */}
      <path
        d="M84 188 
           C94 196 112 198 126 190 
           C138 184 148 172 160 178 
           C172 172 182 184 194 190 
           C208 198 226 196 236 188 
           C246 178 250 162 250 140
           C236 172 198 176 180 146
           C174 136 166 142 160 150
           C154 142 146 136 140 146
           C122 176 84 172 70 140
           C70 162 74 178 84 188
           Z"
        fill="#1ba0f2"
        stroke="#111215"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* BIG ADORABLE CHIBI EYES */}
      {/* Left Eye Opening Background Skin */}
      <ellipse cx="112" cy="154" rx="30" ry="34" fill="#fed8b1" stroke="#111215" strokeWidth="4" />
      {/* Left Big Black Pupil */}
      <ellipse cx="112" cy="154" rx="24" ry="30" fill="#111215" />
      {/* Left Eye Glossy Highlights */}
      <circle cx="104" cy="142" r="10" fill="#ffffff" />
      <circle cx="122" cy="166" r="4.5" fill="#ffffff" />

      {/* Right Eye Opening Background Skin */}
      <ellipse cx="208" cy="154" rx="30" ry="34" fill="#fed8b1" stroke="#111215" strokeWidth="4" />
      {/* Right Big Black Pupil */}
      <ellipse cx="208" cy="154" rx="24" ry="30" fill="#111215" />
      {/* Right Eye Glossy Highlights */}
      <circle cx="200" cy="142" r="10" fill="#ffffff" />
      <circle cx="218" cy="166" r="4.5" fill="#ffffff" />

      {/* ================= 8. ROUND VIBRANIUM SHIELD ================= */}
      {/* Outer Red Ring */}
      <circle cx="240" cy="272" r="58" fill="#e62029" stroke="#111215" strokeWidth="4.5" />
      {/* White Ring */}
      <circle cx="240" cy="272" r="46" fill="#ffffff" stroke="#111215" strokeWidth="3.5" />
      {/* Inner Red Ring */}
      <circle cx="240" cy="272" r="34" fill="#e62029" stroke="#111215" strokeWidth="3.5" />
      {/* Blue Center Core */}
      <circle cx="240" cy="272" r="22" fill="#1ba0f2" stroke="#111215" strokeWidth="3.5" />

      {/* White Star in Center of Shield */}
      <polygon
        points="240,254 245,266 258,266 248,274 252,287 240,279 228,287 232,274 222,266 235,266"
        fill="#ffffff"
        stroke="#111215"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SpiderManFigureSVG({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 380 340"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ================= 1. CROUCHING THIGHS (BLUE) ================= */}
      {/* Left Thigh */}
      <path
        d="M148 214 
           C112 210 82 220 84 246 
           C86 268 116 280 152 272 
           C168 268 174 250 172 232 
           Z"
        fill="#0066f5"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Right Thigh */}
      <path
        d="M232 214 
           C268 210 298 220 296 246 
           C294 268 264 280 228 272 
           C212 268 206 250 208 232 
           Z"
        fill="#0066f5"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Crotch Center Panel */}
      <path
        d="M165 228 Q190 240 215 228 L212 256 Q190 270 168 256 Z"
        fill="#0066f5"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* ================= 2. CROUCHING BOOTS (RED & WEBBED) ================= */}
      {/* Left Boot */}
      <path
        d="M125 264 
           L146 250 
           L178 300 
           C188 322 178 334 165 334 
           C150 334 146 316 136 304 
           L114 278 
           Z"
        fill="#e62029"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Left Boot Webbing */}
      <path d="M140 255 L164 322" stroke="#111111" strokeWidth="2.5" />
      <path d="M126 270 Q145 278 160 272" stroke="#111111" strokeWidth="2.5" fill="none" />
      <path d="M136 290 Q152 298 170 290" stroke="#111111" strokeWidth="2.5" fill="none" />
      <path d="M144 310 Q156 318 174 312" stroke="#111111" strokeWidth="2.5" fill="none" />

      {/* Right Boot */}
      <path
        d="M255 264 
           L234 250 
           L202 300 
           C192 322 202 334 215 334 
           C230 334 234 316 244 304 
           L266 278 
           Z"
        fill="#e62029"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Right Boot Webbing */}
      <path d="M240 255 L216 322" stroke="#111111" strokeWidth="2.5" />
      <path d="M254 270 Q235 278 220 272" stroke="#111111" strokeWidth="2.5" fill="none" />
      <path d="M244 290 Q228 298 210 290" stroke="#111111" strokeWidth="2.5" fill="none" />
      <path d="M236 310 Q224 318 206 312" stroke="#111111" strokeWidth="2.5" fill="none" />

      {/* ================= 3. UPPER ARMS (BLUE) ================= */}
      {/* Left Upper Arm */}
      <path
        d="M144 148 
           L84 102 
           C72 108 68 124 74 136 
           L138 176 
           Z"
        fill="#0066f5"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Right Upper Arm */}
      <path
        d="M236 148 
           L296 102 
           C308 108 312 124 306 136 
           L242 176 
           Z"
        fill="#0066f5"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* ================= 4. OUTSTRETCHED HANDS & GLOVES (RED) ================= */}
      {/* Left Hand & Glove */}
      <path
        d="M84 104 
           L44 112 
           C40 98 24 94 24 104 
           C24 112 36 116 32 122 
           C20 114 14 128 20 134 
           C26 140 38 132 36 140 
           C24 138 20 152 28 156 
           C38 160 48 144 54 148 
           C48 156 46 166 56 168 
           C66 170 70 152 74 140 
           L88 132 
           Z"
        fill="#e62029"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Left Glove Webbing Grid */}
      <path d="M74 116 L38 134" stroke="#111111" strokeWidth="2" />
      <path d="M66 108 L34 146" stroke="#111111" strokeWidth="2" />
      <path d="M52 112 Q58 130 52 148" stroke="#111111" strokeWidth="2" fill="none" />
      <path d="M68 110 Q74 126 70 140" stroke="#111111" strokeWidth="2" fill="none" />

      {/* Right Hand & Glove */}
      <path
        d="M296 104 
           L336 112 
           C340 98 356 94 356 104 
           C356 112 344 116 348 122 
           C360 114 366 128 360 134 
           C354 140 342 132 344 140 
           C356 138 360 152 352 156 
           C342 160 332 144 326 148 
           C332 156 334 166 324 168 
           C314 170 310 152 306 140 
           L292 132 
           Z"
        fill="#e62029"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Right Glove Webbing Grid */}
      <path d="M306 116 L342 134" stroke="#111111" strokeWidth="2" />
      <path d="M314 108 L346 146" stroke="#111111" strokeWidth="2" />
      <path d="M328 112 Q322 130 328 148" stroke="#111111" strokeWidth="2" fill="none" />
      <path d="M312 110 Q306 126 310 140" stroke="#111111" strokeWidth="2" fill="none" />

      {/* ================= 5. TORSO & EMBLEM ================= */}
      {/* Torso Base Outline */}
      <path
        d="M142 152 
           L160 230 
           L220 230 
           L238 152 
           Z"
        fill="#0066f5"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Red Center Vest Strip */}
      <path
        d="M164 152 
           L174 230 
           L206 230 
           L216 152 
           Z"
        fill="#e62029"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Center Vest Webbing */}
      <line x1="190" y1="152" x2="190" y2="230" stroke="#111111" strokeWidth="2.5" />
      <path d="M168 174 Q190 184 212 174" stroke="#111111" strokeWidth="2.5" fill="none" />
      <path d="M171 198 Q190 208 209 198" stroke="#111111" strokeWidth="2.5" fill="none" />
      <path d="M174 218 Q190 224 206 218" stroke="#111111" strokeWidth="2.5" fill="none" />

      {/* Black Spider Chest Emblem */}
      {/* Spider Body */}
      <ellipse cx="190" cy="192" rx="3.5" ry="7.5" fill="#111111" />
      <circle cx="190" cy="183" r="2.5" fill="#111111" />
      {/* 4 Upper Legs */}
      <path d="M190 186 Q178 176 172 186" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M190 188 Q180 180 174 194" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M190 186 Q202 176 208 186" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M190 188 Q200 180 206 194" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* 4 Lower Legs */}
      <path d="M190 194 Q178 204 176 214" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M190 196 Q182 208 180 218" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M190 194 Q202 204 204 214" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M190 196 Q198 208 200 218" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" fill="none" />

      {/* ================= 6. BIG CHIBI HEAD (RED & WEBBED) ================= */}
      {/* Egg/Oval Mask Contour */}
      <path
        d="M190 16 
           C134 16 120 60 120 106 
           C120 152 142 180 190 180 
           C238 180 260 152 260 106 
           C260 60 246 16 190 16 
           Z"
        fill="#e62029"
        stroke="#111111"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Head Radial Web Spokes from Center Point (190, 126) */}
      <line x1="190" y1="16" x2="190" y2="180" stroke="#111111" strokeWidth="2.5" />
      <line x1="190" y1="126" x2="164" y2="20" stroke="#111111" strokeWidth="2.5" />
      <line x1="190" y1="126" x2="142" y2="36" stroke="#111111" strokeWidth="2.5" />
      <line x1="190" y1="126" x2="124" y2="70" stroke="#111111" strokeWidth="2.5" />
      <line x1="190" y1="126" x2="216" y2="20" stroke="#111111" strokeWidth="2.5" />
      <line x1="190" y1="126" x2="238" y2="36" stroke="#111111" strokeWidth="2.5" />
      <line x1="190" y1="126" x2="256" y2="70" stroke="#111111" strokeWidth="2.5" />

      {/* Chin Web Spokes */}
      <line x1="190" y1="126" x2="162" y2="174" stroke="#111111" strokeWidth="2.5" />
      <line x1="190" y1="126" x2="218" y2="174" stroke="#111111" strokeWidth="2.5" />

      {/* Concentric Scallop Web Rings */}
      {/* Forehead Outer Ring */}
      <path d="M124 70 Q140 50 164 42 Q190 36 216 42 Q240 50 256 70" stroke="#111111" strokeWidth="2.5" fill="none" />
      {/* Forehead Mid Ring */}
      <path d="M134 90 Q150 72 172 64 Q190 58 208 64 Q230 72 246 90" stroke="#111111" strokeWidth="2.5" fill="none" />
      {/* Forehead Inner Ring */}
      <path d="M148 108 Q166 94 190 90 Q214 94 232 108" stroke="#111111" strokeWidth="2.5" fill="none" />
      {/* Crown Top Arcs */}
      <path d="M142 36 Q166 26 190 24 Q214 26 238 36" stroke="#111111" strokeWidth="2.5" fill="none" />

      {/* Chin Arcs */}
      <path d="M162 152 Q190 164 218 152" stroke="#111111" strokeWidth="2.5" fill="none" />
      <path d="M172 168 Q190 176 208 168" stroke="#111111" strokeWidth="2.5" fill="none" />

      {/* ================= 7. LARGE EXPRESSIVE EYE FRAMES & LENSES ================= */}
      {/* Left Eye Black Outer Border */}
      <path
        d="M126 78 
           C144 72 170 94 178 126 
           C174 136 156 142 144 138 
           C130 134 116 110 126 78 
           Z"
        fill="#111111"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Left Eye White Lens */}
      <path
        d="M132 84 
           C146 80 166 98 172 124 
           C168 132 154 136 144 132 
           C134 126 124 106 132 84 
           Z"
        fill="#ffffff"
      />

      {/* Right Eye Black Outer Border */}
      <path
        d="M254 78 
           C236 72 210 94 202 126 
           C206 136 224 142 236 138 
           C250 134 264 110 254 78 
           Z"
        fill="#111111"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Right Eye White Lens */}
      <path
        d="M248 84 
           C234 80 214 98 208 124 
           C212 132 226 136 236 132 
           C246 126 256 106 248 84 
           Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function WolverineFigureSVG({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 360"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ================= 1. TRAILING LEG & TORSO (BACKGROUND) ================= */}
      {/* Trailing Back Leg (Navy Blue) */}
      <path
        d="M172 278 L188 344 C192 348 200 348 202 340 L204 274 Z"
        fill="#12233f"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Torso Base (Yellow) */}
      <path
        d="M158 234 
           L160 310 
           C166 316 198 316 202 310 
           L222 238 
           Z"
        fill="#ffcc00"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Tiger Stripes on Ribs (Black) */}
      <polygon points="159,240 172,243 159,249" fill="#111111" />
      <polygon points="160,252 176,256 160,263" fill="#111111" />
      <polygon points="160,266 172,270 161,276" fill="#111111" />

      <polygon points="220,242 208,245 220,251" fill="#111111" />
      <polygon points="219,254 204,258 219,265" fill="#111111" />
      <polygon points="218,268 208,272 217,278" fill="#111111" />

      {/* Chest Muscle Lines */}
      <path d="M182 248 Q190 254 198 248" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <line x1="190" y1="251" x2="190" y2="265" stroke="#111111" strokeWidth="2.5" />

      {/* Red Belt & Buckle */}
      <path d="M162 274 L204 274" stroke="#d61f26" strokeWidth="6" strokeLinecap="round" />
      <circle cx="194" cy="274" r="6" fill="#d61f26" stroke="#111111" strokeWidth="2.5" />

      {/* Forward Raised Knee (Yellow Oval) */}
      <ellipse
        cx="212"
        cy="282"
        rx="14"
        ry="20"
        fill="#ffcc00"
        stroke="#111111"
        strokeWidth="4"
      />

      {/* ================= 2. LEFT ARM & EXTENDED CLAWS (VIEWER'S LEFT) ================= */}
      {/* Yellow Shoulder Sleeve */}
      <path
        d="M156 226 L124 230 L108 250 L132 268 L152 244 Z"
        fill="#ffcc00"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Blue Gauntlet Forearm */}
      <path
        d="M120 236 L94 266 C90 274 98 280 106 276 L130 254 Z"
        fill="#12233f"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Left 3 Adamantium Claws */}
      <polygon points="98,266 56,288 64,304 94,275" fill="#d2d8df" stroke="#111111" strokeWidth="3" strokeLinejoin="round" />
      <polygon points="95,270 65,304 74,316 93,281" fill="#e8ecf0" stroke="#111111" strokeWidth="3" strokeLinejoin="round" />
      <polygon points="91,274 76,312 85,322 93,286" fill="#d2d8df" stroke="#111111" strokeWidth="3" strokeLinejoin="round" />

      {/* ================= 3. RIGHT ARM & EXTENDED CLAWS (VIEWER'S RIGHT) ================= */}
      {/* Yellow Shoulder Sleeve */}
      <path
        d="M224 226 L254 220 L274 246 L248 260 L226 240 Z"
        fill="#ffcc00"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Blue Gauntlet Forearm & Fist */}
      <path
        d="M250 236 L278 244 C288 248 290 262 278 270 L256 256 Z"
        fill="#12233f"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Glove Knuckle Ridges */}
      <circle cx="274" cy="248" r="5" fill="#12233f" stroke="#111111" strokeWidth="2.5" />
      <circle cx="282" cy="254" r="5" fill="#12233f" stroke="#111111" strokeWidth="2.5" />
      <circle cx="284" cy="264" r="5" fill="#12233f" stroke="#111111" strokeWidth="2.5" />

      {/* Right 3 Long Extended Claws */}
      <polygon points="274,258 274,324 284,324 280,265" fill="#d2d8df" stroke="#111111" strokeWidth="3.5" strokeLinejoin="round" />
      <polygon points="280,265 292,330 302,328 286,270" fill="#e8ecf0" stroke="#111111" strokeWidth="3.5" strokeLinejoin="round" />
      <polygon points="286,270 308,318 316,312 290,274" fill="#d2d8df" stroke="#111111" strokeWidth="3.5" strokeLinejoin="round" />

      {/* ================= 4. BIG CHIBI WOLVERINE HEAD ================= */}
      {/* Yellow Center Forehead Dome */}
      <path
        d="M184 54 
           C140 54 120 84 126 128 
           C130 156 156 190 184 190 
           C212 190 238 156 242 128 
           C248 84 228 54 184 54 
           Z"
        fill="#ffcc00"
      />

      {/* HUGE BLACK COWl FLARES (BAT-WINGS) */}
      <path
        d="M86 44 
           C90 95 106 170 148 198 
           C136 216 160 228 184 228 
           C208 228 232 216 220 198 
           C262 170 278 95 282 44 
           C270 82 250 114 240 128 
           C232 94 212 50 184 50 
           C156 50 136 94 128 128 
           C118 114 98 82 86 44 
           Z"
        fill="#111111"
        stroke="#111111"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />

      {/* Yellow Crown Infill & Nose Keystone Bridge */}
      <path
        d="M184 50 
           C212 50 232 94 240 128 
           C212 174 200 180 184 172 
           C168 180 156 174 128 128 
           C136 94 156 50 184 50 
           Z"
        fill="#ffcc00"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Small Yellow Arrow/Keystone on Nose Bridge */}
      <polygon points="184,188 178,172 190,172" fill="#ffcc00" stroke="#111111" strokeWidth="2.5" />

      {/* Angular White Eyes (Slanted Downward) */}
      {/* Left Eye */}
      <polygon
        points="136,150 166,176 156,182 138,168"
        fill="#ffffff"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Right Eye */}
      <polygon
        points="232,150 202,176 212,182 230,168"
        fill="#ffffff"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Exposed Lower Face/Jaw (Skin Tone) */}
      <path
        d="M152 195 
           C152 216 164 224 184 224 
           C204 224 216 216 216 195 
           C204 194 196 198 184 198 
           C172 198 164 194 152 195 
           Z"
        fill="#fcd8b8"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Gritted Snarl Mouth & Teeth */}
      <path
        d="M168 202 
           L200 202 
           C205 204 204 220 198 220 
           L170 220 
           C164 220 163 204 168 202 
           Z"
        fill="#ffffff"
        stroke="#111111"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Teeth Grid Lines */}
      <line x1="171" y1="211" x2="197" y2="211" stroke="#111111" strokeWidth="2" />
      <line x1="178" y1="202" x2="178" y2="220" stroke="#111111" strokeWidth="2" />
      <line x1="189" y1="202" x2="189" y2="220" stroke="#111111" strokeWidth="2" />
    </svg>
  );
}

export function BlackPantherFigureSVG({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 420"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ================= 1. POINTY PANTHER EARS ================= */}
      {/* Left Ear */}
      <polygon
        points="70,72 82,24 116,56"
        fill="#232629"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Right Ear */}
      <polygon
        points="250,72 238,24 204,56"
        fill="#232629"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* ================= 2. LEGS & PAW BOOTS ================= */}
      {/* Suit Thighs Base */}
      <path
        d="M112 284 
           L94 366 
           L150 366 
           L160 336 
           L170 366 
           L226 366 
           L208 284 
           Z"
        fill="#232629"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Cyan Vibranium Leg Circuit Stripes */}
      <path d="M96 352 Q122 366 148 352" stroke="#87c0f2" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M224 352 Q198 366 172 352" stroke="#87c0f2" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* Left Boot */}
      <path
        d="M96 366 
           L74 388 
           C70 404 84 412 110 412 
           C134 412 150 406 150 388 
           L148 366 
           Z"
        fill="#2e3338"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <line x1="102" y1="400" x2="102" y2="412" stroke="#111111" strokeWidth="2.5" />

      {/* Right Boot */}
      <path
        d="M224 366 
           L246 388 
           C250 404 236 412 210 412 
           C186 412 170 406 170 388 
           L172 366 
           Z"
        fill="#2e3338"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <line x1="218" y1="400" x2="218" y2="412" stroke="#111111" strokeWidth="2.5" />

      {/* ================= 3. TORSO & CLAW HANDS ================= */}
      {/* Torso Silhouette */}
      <path
        d="M104 220 
           L112 292 
           L208 292 
           L216 220 
           Z"
        fill="#232629"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Torso Muscular Inset Seams */}
      <path d="M136 244 L160 262 L184 244" stroke="#111111" strokeWidth="3" fill="none" />
      <path d="M124 280 L160 292 L196 280" stroke="#111111" strokeWidth="3" fill="none" />

      {/* Left Arm & Sharp Claws (Viewer's Left) */}
      <path
        d="M106 224 
           L56 256 
           C42 268 38 290 42 300 
           C46 302 54 286 58 294 
           C62 304 68 316 78 300 
           C84 290 92 284 100 286 
           L118 262 
           Z"
        fill="#232629"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Left Forearm Cyan Trim */}
      <path d="M68 284 Q82 274 94 286" stroke="#87c0f2" strokeWidth="3.5" fill="none" />

      {/* Right Arm & Sharp Claws (Viewer's Right) */}
      <path
        d="M214 224 
           L264 256 
           C278 268 282 290 278 300 
           C274 302 266 286 262 294 
           C258 304 252 316 242 300 
           C236 290 228 284 220 286 
           L202 262 
           Z"
        fill="#232629"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Right Forearm Cyan Trim */}
      <path d="M252 284 Q238 274 226 286" stroke="#87c0f2" strokeWidth="3.5" fill="none" />

      {/* Silver Vibranium Tooth Necklace */}
      <path d="M120 220 Q160 250 200 220" stroke="#111111" strokeWidth="3.5" fill="none" />
      <polygon points="132,224 136,238 140,224" fill="#87c0f2" stroke="#111111" strokeWidth="1.5" />
      <polygon points="144,228 148,244 152,228" fill="#87c0f2" stroke="#111111" strokeWidth="1.5" />
      <polygon points="156,232 160,250 164,232" fill="#87c0f2" stroke="#111111" strokeWidth="1.5" />
      <polygon points="168,228 172,244 176,228" fill="#87c0f2" stroke="#111111" strokeWidth="1.5" />
      <polygon points="180,224 184,238 188,224" fill="#87c0f2" stroke="#111111" strokeWidth="1.5" />

      {/* ================= 4. PANTHER MASK HEAD ================= */}
      {/* Big Mask Contour */}
      <path
        d="M68 130 
           C60 52 100 18 160 18 
           C220 18 260 52 252 130 
           C250 178 226 226 160 226 
           C94 226 70 178 68 130 
           Z"
        fill="#232629"
        stroke="#111111"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Forehead Ridge Lines (Cyan Vibranium Circuitry) */}
      <line x1="160" y1="22" x2="160" y2="86" stroke="#87c0f2" strokeWidth="4" strokeLinecap="round" />
      <path d="M136 26 L136 78 L160 114" stroke="#87c0f2" strokeWidth="4" strokeLinejoin="round" fill="none" />
      <path d="M184 26 L184 78 L160 114" stroke="#87c0f2" strokeWidth="4" strokeLinejoin="round" fill="none" />

      <path d="M112 38 L114 98 L138 126" stroke="#87c0f2" strokeWidth="3.5" strokeLinejoin="round" fill="none" />
      <path d="M208 38 L206 98 L182 126" stroke="#87c0f2" strokeWidth="3.5" strokeLinejoin="round" fill="none" />

      {/* Cheek Whisker Circuit Lines */}
      <path d="M72 160 Q106 186 138 180" stroke="#87c0f2" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M248 160 Q214 186 182 180" stroke="#87c0f2" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M130 190 L160 216 L190 190" stroke="#87c0f2" strokeWidth="3.5" strokeLinejoin="round" fill="none" />

      {/* Almond-Shaped Luminous White Eyes */}
      {/* Left Eye */}
      <path
        d="M92 136 
           C102 124 134 126 142 148 
           C130 162 104 158 92 136 
           Z"
        fill="#f4f4e6"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Right Eye */}
      <path
        d="M228 136 
           C218 124 186 126 178 148 
           C190 162 216 158 228 136 
           Z"
        fill="#f4f4e6"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Nose Bridge Inset */}
      <path d="M148 152 Q160 160 172 152" stroke="#111111" strokeWidth="3" fill="none" />
    </svg>
  );
}

export function DoctorStrangeFigureSVG({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 440"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ================= 1. CAPE (BACKGROUND) ================= */}
      {/* Red Cape Flaps */}
      <path
        d="M60 270 
           L36 395 
           L94 380 
           L84 310 
           Z"
        fill="#b8202e"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M236 300 
           L276 395 
           L218 385 
           L224 315 
           Z"
        fill="#b8202e"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* High Red Cloak Collar (Behind Head) */}
      <path
        d="M80 200 
           C60 170 82 230 110 248 
           C140 262 180 262 210 248 
           C238 230 260 170 240 200 
           C258 240 240 260 220 270 
           L100 270 
           C80 260 62 240 80 200 
           Z"
        fill="#a01824"
        stroke="#111111"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />

      {/* ================= 2. LEGS & SHOES ================= */}
      {/* Pants Base (Navy Blue) */}
      <path
        d="M102 338 
           L80 405 
           L146 405 
           L160 380 
           L174 405 
           L240 405 
           L218 338 
           Z"
        fill="#263b6d"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Red Shin Wraps / Straps */}
      <path d="M88 386 L140 376" stroke="#c02636" strokeWidth="4" strokeLinecap="round" />
      <path d="M84 396 L142 386" stroke="#c02636" strokeWidth="4" strokeLinecap="round" />
      <path d="M232 386 L180 376" stroke="#c02636" strokeWidth="4" strokeLinecap="round" />
      <path d="M236 396 L178 386" stroke="#c02636" strokeWidth="4" strokeLinecap="round" />

      {/* Shoes (Black with White Soles) */}
      <path
        d="M74 402 
           C66 414 74 426 94 426 
           L146 426 
           C152 426 156 414 148 402 
           Z"
        fill="#1e242d"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <rect x="76" y="420" width="70" height="6" rx="3" fill="#ffffff" stroke="#111111" strokeWidth="2" />

      <path
        d="M246 402 
           C254 414 246 426 226 426 
           L174 426 
           C168 426 164 414 172 402 
           Z"
        fill="#1e242d"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <rect x="174" y="420" width="70" height="6" rx="3" fill="#ffffff" stroke="#111111" strokeWidth="2" />

      {/* ================= 3. ROBE / TUNIC & BELTS ================= */}
      {/* Blue Sorcerer Tunic */}
      <path
        d="M102 245 
           L90 348 
           L230 348 
           L218 245 
           Z"
        fill="#395393"
        stroke="#111111"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />

      {/* Tunic Chest Overlap Lines */}
      <path d="M142 245 L156 300 M178 245 L164 300" stroke="#111111" strokeWidth="3" />
      <line x1="160" y1="300" x2="160" y2="348" stroke="#111111" strokeWidth="3.5" />

      {/* Layered Brown Leather Belts */}
      <rect x="94" y="296" width="132" height="14" fill="#7a4623" stroke="#111111" strokeWidth="3.5" />
      <rect x="94" y="310" width="132" height="14" fill="#693b1d" stroke="#111111" strokeWidth="3.5" />

      {/* Silver Knotted Buckle */}
      <rect x="146" y="302" width="28" height="20" rx="3" fill="#ffffff" stroke="#111111" strokeWidth="3" />
      <line x1="154" y1="302" x2="154" y2="322" stroke="#111111" strokeWidth="2" />
      <line x1="166" y1="302" x2="166" y2="322" stroke="#111111" strokeWidth="2" />

      {/* Eye of Agamotto Amulet */}
      <path d="M142 250 L152 272 M178 250 L168 272" stroke="#f0d148" strokeWidth="3.5" />
      <circle cx="160" cy="276" r="12" fill="#edd055" stroke="#111111" strokeWidth="3.5" />
      <circle cx="160" cy="276" r="5" fill="#2d2d2d" stroke="#111111" strokeWidth="2" />

      {/* Left Arm Resting (Viewer's Right) */}
      <path
        d="M214 260 
           L244 290 
           L240 330 
           L216 348 
           L204 316 
           Z"
        fill="#395393"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Arm Wraps & Hand */}
      <path d="M216 298 L244 308 M210 316 L238 326" stroke="#111111" strokeWidth="3" />
      <path d="M218 338 C226 348 244 336 240 324" fill="#fed8b1" stroke="#111111" strokeWidth="3.5" />

      {/* ================= 4. SPELLCASTING RIGHT HAND (VIEWER'S LEFT) ================= */}
      {/* Forearm Sleeve */}
      <path
        d="M106 258 
           L84 300 
           L112 320 
           L124 274 
           Z"
        fill="#395393"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Hand Mudra (Index & Middle Raised) */}
      <path
        d="M80 324 
           C66 318 54 304 54 290 
           L54 246 
           C54 238 68 238 68 246 
           L68 276 
           L72 246 
           C72 238 86 238 86 246 
           L86 294 
           C90 288 100 294 98 304 
           C96 312 88 322 80 324 
           Z"
        fill="#fed8b1"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Curled Ring & Little Finger */}
      <path d="M54 280 C44 280 40 292 48 298 C54 302 64 298 64 290" fill="#fed8b1" stroke="#111111" strokeWidth="3" />
      <path d="M52 296 C42 296 40 308 48 312 C56 314 66 310 64 302" fill="#fed8b1" stroke="#111111" strokeWidth="3" />

      {/* ================= 5. HEAD, HAIR & MUSTACHE ================= */}
      {/* Ears */}
      <path d="M68 136 C48 136 44 168 54 184 C64 196 74 186 78 174" fill="#fed8b1" stroke="#111111" strokeWidth="4" />
      <path d="M252 136 C272 136 276 168 266 184 C256 196 246 186 242 174" fill="#fed8b1" stroke="#111111" strokeWidth="4" />

      {/* Face Base */}
      <path
        d="M72 120 
           C62 188 84 238 160 238 
           C236 238 258 188 248 120 
           Z"
        fill="#fed8b1"
        stroke="#111111"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />

      {/* Slick Black Hair & White Side Streak */}
      <path
        d="M62 130 
           C52 64 88 16 160 16 
           C232 16 268 64 258 130 
           C256 148 244 172 240 172 
           C236 172 238 140 234 116 
           C226 64 212 50 160 50 
           C114 50 96 68 86 116 
           C82 140 84 172 80 172 
           C76 172 64 148 62 130 
           Z"
        fill="#1a1c20"
        stroke="#111111"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />

      {/* White / Silver Streak at Right Temple */}
      <path
        d="M80 62 
           C88 78 92 108 90 128 
           C86 112 86 86 78 72 
           Z"
        fill="#eef2f5"
      />

      {/* Sharp Angry Eyebrows */}
      <polygon points="86,120 126,138 120,146 82,130" fill="#111111" />
      <polygon points="234,120 194,138 200,146 238,130" fill="#111111" />

      {/* Big Chibi Eyes */}
      <ellipse cx="106" cy="160" rx="15" ry="20" fill="#111111" />
      <circle cx="102" cy="154" r="5" fill="#ffffff" />
      <ellipse cx="214" cy="160" rx="15" ry="20" fill="#111111" />
      <circle cx="210" cy="154" r="5" fill="#ffffff" />

      {/* Connected Goatee & Mustache */}
      <path
        d="M124 200 
           C134 186 150 186 160 186 
           C170 186 186 186 196 200 
           C204 212 200 232 188 234 
           C180 234 178 222 170 222 
           L150 222 
           C142 222 140 234 132 234 
           C120 232 116 212 124 200 
           Z"
        fill="#111111"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Soul Patch Cutout */}
      <polygon points="152,222 168,222 160,234" fill="#111111" />
      <ellipse cx="160" cy="214" rx="6" ry="3" fill="#fed8b1" />
    </svg>
  );
}

export function ScarletWitchFigureSVG({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 380"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="scarletGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff4d6d" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ff4d6d" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ================= 1. CAPE (FLOWING ON THE FLOOR TO LEFT) ================= */}
      <path
        d="M102 240 
           C70 240 28 290 20 310 
           C16 318 36 322 72 314 
           C112 306 128 290 140 260 
           Z"
        fill="#7f171d"
        stroke="#2b090b"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path d="M42 304 C62 300 92 288 116 270" stroke="#520e13" strokeWidth="2.5" fill="none" />

      {/* ================= 2. SEATED ONESIE BODY & LEGS ================= */}
      {/* Bottom & Leg Folds */}
      <path
        d="M128 235 
           L124 300 
           C122 340 160 366 200 348 
           C212 344 224 330 220 310 
           C216 295 190 285 186 260 
           Z"
        fill="#b4383c"
        stroke="#2b090b"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Left Baby Foot Soles (Viewer's Left) */}
      <path
        d="M136 310 
           C128 322 136 348 152 352 
           C168 356 182 344 178 328 
           C174 316 150 300 136 310 
           Z"
        fill="#b4383c"
        stroke="#2b090b"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <ellipse cx="160" cy="336" rx="12" ry="16" fill="#c65559" />

      {/* Right Baby Foot Soles (Viewer's Right) */}
      <path
        d="M192 316 
           C188 332 208 348 226 344 
           C240 340 248 316 238 300 
           C230 288 200 298 192 316 
           Z"
        fill="#b4383c"
        stroke="#2b090b"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <ellipse cx="222" cy="326" rx="12" ry="16" fill="#c65559" />

      {/* Onesie Front Torso & Bib */}
      <path
        d="M132 245 
           C128 275 145 320 180 320 
           C200 320 208 285 204 245 
           Z"
        fill="#c4464b"
      />

      {/* Glowing Hex Ruby Pendant Necklace */}
      <path d="M148 245 L166 262 L184 245" stroke="#2b090b" strokeWidth="2" fill="none" />
      {/* Ambient Red Glow Halo */}
      <circle cx="166" cy="272" r="14" fill="url(#scarletGlow)" />
      {/* Pendant Gem */}
      <ellipse cx="166" cy="272" rx="7" ry="9" fill="#e61c24" stroke="#2b090b" strokeWidth="2" />
      <ellipse cx="164" cy="270" rx="2" ry="3.5" fill="#ffffff" />

      {/* ================= 3. ARMS ================= */}
      {/* Left Resting Arm (Viewer's Left - Touching Cheek) */}
      <path
        d="M106 250 
           C90 262 108 298 128 290 
           C138 286 142 270 134 252 
           Z"
        fill="#a62c31"
        stroke="#2b090b"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Chubby Hand Touching Face */}
      <path
        d="M124 238 
           C118 226 122 212 128 214 
           C132 216 134 226 138 220 
           C140 216 148 224 146 230 
           C144 236 136 244 124 238 
           Z"
        fill="#ffd5c9"
        stroke="#2b090b"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Chaos Magic Cheek Sparkle Aura */}
      <path
        d="M126 218 Q138 210 148 216 M136 212 L140 224"
        stroke="#ff4d6d"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="138" cy="216" r="10" fill="url(#scarletGlow)" />

      {/* Right Arm (Viewer's Right, Resting Down) */}
      <path
        d="M198 250 C214 268 220 295 210 312"
        stroke="#2b090b"
        strokeWidth="3.5"
        fill="#a62c31"
      />

      {/* ================= 4. BIG CHIBI HEAD & TIARA COWL ================= */}
      {/* Back Head Hood */}
      <path
        d="M68 180 
           C52 100 88 40 180 40 
           C255 40 280 100 270 180 
           C260 230 220 252 170 250 
           C110 252 75 225 68 180 
           Z"
        fill="#8f1d22"
        stroke="#2b090b"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Baby Face Base */}
      <path
        d="M100 135 
           C88 178 106 232 170 232 
           C230 232 248 178 238 135 
           C230 95 195 85 168 85 
           C136 85 106 98 100 135 
           Z"
        fill="#ffe3da"
      />

      {/* Cute Forehead Hair Curl */}
      <path
        d="M148 116 
           C144 130 156 142 160 138 
           C162 130 156 122 152 116 
           Z"
        fill="#3f140f"
      />

      {/* WANDA'S CRIMSON TIARA CROWN */}
      <path
        d="M80 62 
           L108 190 
           L168 226 
           L228 190 
           L256 62 
           L214 116 
           L168 176 
           L122 116 
           Z"
        fill="#a11b22"
        stroke="#2b090b"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Top Right Tiara Specular Highlight */}
      <path
        d="M236 84 C240 92 242 106 240 114"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Gentle Cheek Blush */}
      <circle cx="132" cy="190" r="10" fill="#ff85a1" opacity="0.6" />
      <circle cx="212" cy="190" r="10" fill="#ff85a1" opacity="0.6" />

      {/* Eyelashes & Brow Lines */}
      <path d="M124 140 Q144 130 162 142" stroke="#2b090b" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M214 140 Q194 130 176 142" stroke="#2b090b" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M120 148 L114 144 M122 154 L114 152" stroke="#2b090b" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M218 148 L224 144 M216 154 L224 152" stroke="#2b090b" strokeWidth="2.5" strokeLinecap="round" />

      {/* BIG ADORABLE SCARLET BABY EYES */}
      {/* Left Eye */}
      <ellipse cx="140" cy="165" rx="16" ry="20" fill="#e61c24" stroke="#2b090b" strokeWidth="3" />
      <ellipse cx="140" cy="168" rx="10" ry="14" fill="#780000" />
      <circle cx="135" cy="158" r="6" fill="#ffffff" />
      <circle cx="146" cy="172" r="3" fill="#ffffff" />

      {/* Right Eye */}
      <ellipse cx="200" cy="165" rx="16" ry="20" fill="#e61c24" stroke="#2b090b" strokeWidth="3" />
      <ellipse cx="200" cy="168" rx="10" ry="14" fill="#780000" />
      <circle cx="195" cy="158" r="6" fill="#ffffff" />
      <circle cx="206" cy="172" r="3" fill="#ffffff" />

      {/* Cute Little Button Nose & 'o' Mouth */}
      <ellipse cx="170" cy="180" rx="1.5" ry="2" fill="#d47060" />
      <ellipse cx="166" cy="192" rx="4" ry="5.5" fill="#e63946" stroke="#2b090b" strokeWidth="2" />
    </svg>
  );
}

export function DaredevilFigureSVG({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 340"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ================= 1. DUAL RED BILLY CLUBS (BATONS) ================= */}
      {/* Left Baton (Viewer's Left, 45-degree angle) */}
      <rect
        x="18"
        y="180"
        width="22"
        height="76"
        rx="5"
        transform="rotate(-40 18 180)"
        fill="#ea3825"
        stroke="#111111"
        strokeWidth="4"
      />

      {/* Right Baton (Viewer's Right, 45-degree angle) */}
      <rect
        x="276"
        y="166"
        width="22"
        height="76"
        rx="5"
        transform="rotate(40 276 166)"
        fill="#ea3825"
        stroke="#111111"
        strokeWidth="4"
      />

      {/* ================= 2. LEGS & LOWER BODY ================= */}
      {/* Legs & Crotch Base */}
      <path
        d="M106 250 
           L84 316 
           C80 328 92 334 116 334 
           C138 334 146 324 146 312 
           L150 286 
           L190 286 
           L194 312 
           C194 324 202 334 224 334 
           C248 334 260 328 256 316 
           L234 250 
           Z"
        fill="#ea3825"
        stroke="#111111"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Boot Sole Lines */}
      <path d="M84 314 Q116 320 146 314" stroke="#111111" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M194 314 Q226 320 256 314" stroke="#111111" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Triangular Pelvis Line */}
      <path d="M104 268 L170 302 L236 268" stroke="#111111" strokeWidth="4" strokeLinejoin="round" fill="none" />

      {/* Right Thigh Holster & Straps (Viewer's Right) */}
      {/* 2 Diagonal Thigh Straps */}
      <path d="M196 280 L242 266" stroke="#111111" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M198 296 L246 280" stroke="#111111" strokeWidth="4.5" strokeLinecap="round" />
      {/* Vertical Holster Case */}
      <rect
        x="240"
        y="260"
        width="14"
        height="40"
        rx="2"
        fill="#ea3825"
        stroke="#111111"
        strokeWidth="4"
      />

      {/* ================= 3. TORSO & BELT ================= */}
      {/* Main Red Torso */}
      <path
        d="M96 178 
           L104 258 
           L236 258 
           L244 178 
           Z"
        fill="#ea3825"
        stroke="#111111"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Red Utility Belt */}
      <rect x="102" y="254" width="136" height="12" fill="#ea3825" stroke="#111111" strokeWidth="4" />
      {/* Belt Buckle Lines */}
      <line x1="148" y1="254" x2="148" y2="266" stroke="#111111" strokeWidth="3.5" />
      <line x1="184" y1="254" x2="184" y2="266" stroke="#111111" strokeWidth="3.5" />

      {/* INTERLOCKING DOUBLE "DD" CHEST EMBLEM */}
      {/* First D */}
      <path
        d="M138 210 L166 210 C178 210 186 216 186 226 C186 236 178 242 166 242 L138 242 Z"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
        fill="none"
      />
      <line x1="146" y1="210" x2="146" y2="242" stroke="#111111" strokeWidth="3.5" />
      <path d="M146 218 L162 218 C170 218 174 220 174 226 C174 232 170 234 162 234 L146 234" stroke="#111111" strokeWidth="2.5" fill="none" />

      {/* Second D (Shifted Right & Down) */}
      <path
        d="M158 222 L180 222 C194 222 204 228 204 238 C204 248 194 254 180 254 L158 254 Z"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
        fill="none"
      />
      <line x1="166" y1="222" x2="166" y2="254" stroke="#111111" strokeWidth="3.5" />
      <path d="M166 230 L178 230 C186 230 192 232 192 238 C192 244 186 246 178 246 L166 246" stroke="#111111" strokeWidth="2.5" fill="none" />

      {/* ================= 4. ARMS & FISTS ================= */}
      {/* Left Arm & Glove (Viewer's Left) */}
      <path
        d="M98 184 
           L56 222 
           C46 232 54 246 68 252 
           C78 256 90 248 94 234 
           L112 214 
           Z"
        fill="#ea3825"
        stroke="#111111"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      {/* Glove Cuff Line */}
      <line x1="68" y1="202" x2="88" y2="226" stroke="#111111" strokeWidth="4" />

      {/* Right Arm & Glove (Viewer's Right) */}
      <path
        d="M242 184 
           L284 222 
           C294 232 286 246 272 252 
           C262 256 250 248 246 234 
           L228 214 
           Z"
        fill="#ea3825"
        stroke="#111111"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      {/* Glove Cuff Line */}
      <line x1="272" y1="202" x2="252" y2="226" stroke="#111111" strokeWidth="4" />

      {/* ================= 5. BIG ROUND CHIBI HEAD & DEVIL HORNS ================= */}
      {/* Devil Horns */}
      {/* Left Horn */}
      <polygon
        points="92,72 88,26 116,48"
        fill="#ea3825"
        stroke="#111111"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      {/* Right Horn */}
      <polygon
        points="248,72 252,26 224,48"
        fill="#ea3825"
        stroke="#111111"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />

      {/* Round Red Head Dome */}
      <circle
        cx="170"
        cy="118"
        r="98"
        fill="#ea3825"
        stroke="#111111"
        strokeWidth="5"
      />

      {/* Curved Brow Cowl Rim Line */}
      <path
        d="M116 178 
           C116 150 142 138 170 138 
           C198 138 224 150 224 178 
           Z"
        fill="#ea3825"
      />

      {/* Peach Exposed Chin/Mouth Cutout */}
      <path
        d="M116 178 
           C116 148 142 138 170 138 
           C198 138 224 148 224 178 
           C224 198 200 216 170 216 
           C140 216 116 198 116 178 
           Z"
        fill="#ffcaa6"
        stroke="#111111"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />

      {/* Straight Horizontal Mouth Line */}
      <line
        x1="140"
        y1="172"
        x2="198"
        y2="172"
        stroke="#111111"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Intense Fierce Black Eye Slits */}
      {/* Left Eye */}
      <path
        d="M110 114 
           C118 126 130 132 142 128 
           C134 126 122 120 120 114 
           Z"
        fill="#111111"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Right Eye */}
      <path
        d="M230 114 
           C222 126 210 132 198 128 
           C206 126 218 120 220 114 
           Z"
        fill="#111111"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// =========================================================================
// 3. THE 10 WEAPON ICONS
// =========================================================================

export function CapShieldSVG({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes shieldSpinGleam {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(220,38,38,0.5)); transform: rotate(0deg); }
          50% { filter: drop-shadow(0 0 12px rgba(0,119,182,0.85)); transform: rotate(180deg); }
        }
        .anim-shield-spin {
          animation: shieldSpinGleam 10s linear infinite;
          transform-origin: 50px 50px;
        }
      `}</style>
      <g className="anim-shield-spin">
        <circle cx="50" cy="50" r="48" fill="#d90429" stroke="#ef233c" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="38" fill="#edf2f4" />
        <circle cx="50" cy="50" r="28" fill="#d90429" />
        <circle cx="50" cy="50" r="18" fill="#003566" />
        <polygon points="50,34 54,44 65,44 56,51 60,61 50,55 40,61 44,51 35,44 46,44" fill="#ffffff" />
      </g>
    </svg>
  );
}

export function StormbreakerSVG({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes lightningFlicker {
          0%, 100% { opacity: 0.15; }
          18% { opacity: 1; filter: drop-shadow(0 0 4px #00f5d4); }
          40% { opacity: 0.2; }
          65% { opacity: 0.95; filter: drop-shadow(0 0 6px #4cc9f0); }
        }
        @keyframes hammerLevitate {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-2.5px) rotate(1.5deg); }
        }
        .anim-axe-shake {
          animation: hammerLevitate 2.8s ease-in-out infinite;
          transform-origin: center;
        }
        .anim-lightning-bolt {
          animation: lightningFlicker 1.2s steps(4, end) infinite;
        }
      `}</style>
      <defs>
        <linearGradient id="axeSteelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="45%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="grootWoodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b48356" />
          <stop offset="50%" stopColor="#825329" />
          <stop offset="100%" stopColor="#472a11" />
        </linearGradient>
      </defs>

      <g className="anim-axe-shake">
        <path d="M22 92 C24 93 28 93 29 90 L53 50 L56 40 L52 40 L19 88 C18 90 20 92 22 92 Z" fill="url(#grootWoodGrad)" stroke="#261609" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M20 90 L25 86 M22 87 L27 83" stroke="#180e06" strokeWidth="1.2" strokeLinecap="round" />
        
        {/* Hammer Back & Socket */}
        <polygon points="26,24 50,32 46,45 22,37" fill="url(#axeSteelGrad)" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" />
        <polygon points="26,24 22,37 18,34 22,21" fill="#64748b" stroke="#111" strokeWidth="1.2" />
        <rect x="47" y="29" width="10" height="17" rx="1.5" fill="#475569" stroke="#111" strokeWidth="1.2" />
        <path d="M46 43 C48 35 54 34 56 28 C57 24 60 25 60 29 C59 35 52 37 50 45 Z" fill="url(#grootWoodGrad)" stroke="#261609" strokeWidth="1" />

        {/* Axe Blade */}
        <path d="M56 32 L81 25 C88 34 89 48 76 62 L55 44 Z" fill="url(#axeSteelGrad)" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M76 26 C84 35 85 47 73 59 L76 62 C89 48 88 34 81 25 Z" fill="#f8fafc" stroke="#111" strokeWidth="1" />

        {/* Animated Lightning */}
        <g className="anim-lightning-bolt">
          <path d="M56 32 L64 29 L63 34 L72 32 L70 38 L83 36 L79 43 L87 45 L76 52 L78 57 L74 61" stroke="#00f5d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M22 22 L27 27 L25 30 L32 32 L30 36 L37 38" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M54 44 L49 53 L51 56 L44 67 L46 71 L38 81" stroke="#4cc9f0" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        </g>
      </g>
    </svg>
  );
}

export function WolverineClawsSVG({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes clawsFloat {
          0%, 100% { transform: translateY(0px); filter: drop-shadow(0 0 3px rgba(255,183,3,0.4)); }
          50% { transform: translateY(-3px); filter: drop-shadow(0 0 8px rgba(255,215,0,0.85)); }
        }
        @keyframes gleamPulse {
          0%, 100% { opacity: 0.2; transform: scale(0.6); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .anim-claw-float {
          animation: clawsFloat 2.6s ease-in-out infinite;
        }
        .anim-gleam-spark {
          animation: gleamPulse 1.6s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>
      <defs>
        <linearGradient id="adamBladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#cbd5e1" />
          <stop offset="75%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>

      <g className="anim-claw-float">
        {/* Left Claws */}
        <rect x="14" y="78" width="22" height="11" rx="2" fill="#334155" stroke="#111" strokeWidth="1.5" />
        <circle cx="25" cy="83.5" r="2.5" fill="#64748b" stroke="#111" strokeWidth="1" />
        <path d="M16 78 C13 58 10 34 12 8 C14 13 18 35 24 77 Z" fill="url(#adamBladeGrad)" stroke="#111" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M23 77 C22 55 21 31 24 4 C26 9 29 33 32 77 Z" fill="url(#adamBladeGrad)" stroke="#111" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M24 4 C24 28 26 53 28 77" stroke="#ffffff" strokeWidth="0.8" opacity="0.8" />
        <path d="M31 77 C32 56 34 33 38 8 C38 13 39 37 38 78 Z" fill="url(#adamBladeGrad)" stroke="#111" strokeWidth="1.2" strokeLinejoin="round" />

        {/* Right Claws */}
        <rect x="64" y="78" width="22" height="11" rx="2" fill="#334155" stroke="#111" strokeWidth="1.5" />
        <circle cx="75" cy="83.5" r="2.5" fill="#64748b" stroke="#111" strokeWidth="1" />
        <path d="M62 78 C61 37 62 13 62 8 C66 33 68 56 69 77 Z" fill="url(#adamBladeGrad)" stroke="#111" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M68 77 C71 33 74 9 76 4 C79 31 78 55 77 77 Z" fill="url(#adamBladeGrad)" stroke="#111" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M76 4 C76 28 74 53 72 77" stroke="#ffffff" strokeWidth="0.8" opacity="0.8" />
        <path d="M76 77 C82 35 86 13 88 8 C90 34 87 58 84 78 Z" fill="url(#adamBladeGrad)" stroke="#111" strokeWidth="1.2" strokeLinejoin="round" />

        {/* Sparkle Glints */}
        <polygon points="24,4 26,1 29,4 26,7" fill="#ffffff" className="anim-gleam-spark" />
        <polygon points="76,4 78,1 81,4 78,7" fill="#ffffff" className="anim-gleam-spark" />
      </g>
    </svg>
  );
}

export function ArcReactorSVG({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes reactorSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reactorPulse {
          0%, 100% { filter: drop-shadow(0 0 4px #00f5d4); }
          50% { filter: drop-shadow(0 0 14px #00f5d4) drop-shadow(0 0 22px #00b4d8); }
        }
        .anim-reactor-spin {
          animation: reactorSpin 16s linear infinite;
          transform-origin: 50px 50px;
        }
        .anim-reactor-glow {
          animation: reactorPulse 2s ease-in-out infinite;
        }
      `}</style>
      <g className="anim-reactor-glow">
        <circle cx="50" cy="50" r="46" stroke="#00f5d4" strokeWidth="2.5" opacity="0.85" />
        <circle cx="50" cy="50" r="41" stroke="#0077b6" strokeWidth="1.5" strokeDasharray="6 3" />
        
        {/* Rotating Segment Coils */}
        <g className="anim-reactor-spin">
          {[...Array(10)].map((_, i) => (
            <rect key={i} x="47.5" y="11" width="5" height="11" rx="1.5" fill="#00f5d4" transform={`rotate(${i * 36} 50 50)`} />
          ))}
        </g>

        <circle cx="50" cy="50" r="26" stroke="#00f5d4" strokeWidth="2" fill="#001824" />
        <polygon points="50,30 67,60 33,60" stroke="#00f5d4" strokeWidth="2" fill="#00f5d4" opacity="0.65" />
        <circle cx="50" cy="50" r="8" fill="#ffffff" />
      </g>
    </svg>
  );
}

export function WebShooterSVG({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 125" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes spideySwing {
          0%, 100% { transform: rotate(-16deg); }
          50% { transform: rotate(16deg); }
        }
        @keyframes webGlow {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(255,255,255,0.4)); }
          50% { filter: drop-shadow(0 0 6px rgba(247,37,133,0.8)); }
        }
        .anim-spider-pendulum {
          animation: spideySwing 2.8s ease-in-out infinite;
          transform-origin: 50px 64px;
        }
        .anim-web-pulse {
          animation: webGlow 2.8s ease-in-out infinite;
        }
      `}</style>
      <defs>
        <linearGradient id="webShade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>

      {/* 3D Geometric Web */}
      <g className="anim-web-pulse">
        <polygon points="50,6 74,15 91,33 94,58 81,78 50,87 19,78 6,58 9,33 26,15" stroke="url(#webShade)" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(255,255,255,0.05)" />
        <polygon points="50,20 67,26 79,39 81,57 72,71 50,77 28,71 19,57 21,39 33,26" stroke="url(#webShade)" strokeWidth="1.8" strokeLinejoin="round" />
        <polygon points="50,34 61,38 69,47 70,59 63,69 50,72 37,69 30,59 31,47 39,38" stroke="url(#webShade)" strokeWidth="1.5" strokeLinejoin="round" />

        {/* Web Radial Spokes */}
        <line x1="50" y1="6" x2="50" y2="72" stroke="url(#webShade)" strokeWidth="2" strokeLinecap="round" />
        <line x1="74" y1="15" x2="50" y2="60" stroke="url(#webShade)" strokeWidth="1.8" />
        <line x1="91" y1="33" x2="50" y2="60" stroke="url(#webShade)" strokeWidth="1.8" />
        <line x1="94" y1="58" x2="50" y2="60" stroke="url(#webShade)" strokeWidth="1.8" />
        <line x1="81" y1="78" x2="50" y2="60" stroke="url(#webShade)" strokeWidth="1.8" />
        <line x1="19" y1="78" x2="50" y2="60" stroke="url(#webShade)" strokeWidth="1.8" />
        <line x1="6" y1="58" x2="50" y2="60" stroke="url(#webShade)" strokeWidth="1.8" />
        <line x1="9" y1="33" x2="50" y2="60" stroke="url(#webShade)" strokeWidth="1.8" />
        <line x1="26" y1="15" x2="50" y2="60" stroke="url(#webShade)" strokeWidth="1.8" />
      </g>

      {/* Swinging Silk Thread & Red Spider */}
      <g className="anim-spider-pendulum">
        <line x1="50" y1="60" x2="50" y2="92" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="2 1" />
        {/* Spider Legs */}
        <path d="M48 97 Q37 89 35 101 Q33 111 39 116 M48 100 Q32 95 30 108 Q29 119 36 125 M48 103 Q34 108 32 118 Q31 129 41 131 M48 106 Q38 117 40 127 Q42 136 47 137" stroke="#e61c24" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M52 97 Q63 89 65 101 Q67 111 61 116 M52 100 Q68 95 70 108 Q71 119 64 125 M52 103 Q66 108 68 118 Q69 129 59 131 M52 106 Q62 117 60 127 Q58 136 53 137" stroke="#e61c24" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        {/* Spider Body */}
        <ellipse cx="50" cy="95" rx="2.5" ry="3" fill="#e61c24" stroke="#800f14" strokeWidth="0.8" />
        <ellipse cx="50" cy="102" rx="4" ry="6" fill="#e61c24" stroke="#800f14" strokeWidth="0.8" />
        <ellipse cx="49" cy="101" rx="1.2" ry="2.5" fill="#ff758f" />
      </g>
    </svg>
  );
}

export function GammaGauntletSVG({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes smashPunchImpact {
          0%, 100% { transform: scale(0.95); }
          50% { transform: scale(1.08) rotate(2deg); filter: drop-shadow(0 0 10px rgba(56,176,0,0.95)); }
        }
        @keyframes rayBurstSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .anim-smash-pulse {
          animation: smashPunchImpact 2.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
          transform-origin: center;
        }
        .anim-ray-burst {
          animation: rayBurstSpin 24s linear infinite;
          transform-origin: 50px 50px;
        }
      `}</style>
      <defs>
        <radialGradient id="blastGradHub" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffea00" />
          <stop offset="50%" stopColor="#ff7b00" />
          <stop offset="85%" stopColor="#e61c24" />
          <stop offset="100%" stopColor="#780000" />
        </radialGradient>
        <linearGradient id="fistGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#70e000" />
          <stop offset="45%" stopColor="#38b000" />
          <stop offset="85%" stopColor="#007200" />
          <stop offset="100%" stopColor="#004b23" />
        </linearGradient>
      </defs>

      <g className="anim-smash-pulse">
        <g className="anim-ray-burst">
          <path d="M50 4 L56 21 L70 9 L68 27 L84 21 L76 36 L93 39 L79 50 L96 59 L78 64 L90 78 L72 77 L77 93 L62 86 L59 97 L48 88 L39 96 L37 84 L22 94 L27 78 L10 81 L20 67 L4 62 L19 52 L5 43 L21 39 L13 24 L30 28 L28 11 L42 21 Z" fill="url(#blastGradHub)" stroke="#111" strokeWidth="1.2" strokeLinejoin="round" />
          <polygon points="50,17 58,32 75,26 66,41 82,49 65,56 75,70 59,67 57,83 46,71 36,81 36,66 21,70 28,56 14,47 29,41 23,28 38,33 41,18" fill="#ffea00" stroke="#111" strokeWidth="1" strokeLinejoin="round" />
        </g>
        <polygon points="17,20 22,18 23,22 19,24" fill="#475569" stroke="#111" strokeWidth="0.8" />
        <polygon points="79,17 83,19 81,23 77,21" fill="#475569" stroke="#111" strokeWidth="0.8" />
        <polygon points="86,67 91,70 88,74 83,71" fill="#475569" stroke="#111" strokeWidth="0.8" />

        <path d="M32 59 L24 77 C29 80 40 82 53 81 L52 66 Z" fill="#007200" stroke="#111" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M33 38 C29 42 29 59 33 64 C39 70 65 71 71 64 C75 58 74 42 70 37 C64 32 37 32 33 38 Z" fill="url(#fistGreenGrad)" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" />

        <ellipse cx="39" cy="43" rx="4.5" ry="5" fill="url(#fistGreenGrad)" stroke="#111" strokeWidth="1.2" />
        <ellipse cx="48" cy="42" rx="5" ry="5.5" fill="url(#fistGreenGrad)" stroke="#111" strokeWidth="1.2" />
        <ellipse cx="56" cy="43" rx="4.8" ry="5.2" fill="url(#fistGreenGrad)" stroke="#111" strokeWidth="1.2" />
        <ellipse cx="64" cy="44" rx="4" ry="4.8" fill="url(#fistGreenGrad)" stroke="#111" strokeWidth="1.2" />
        <path d="M35 51 C35 58 43 61 53 61 C59 60 60 56 58 52 L51 51 Z" fill="#2d9300" stroke="#111" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M40 48 Q48 52 56 48" stroke="#111" strokeWidth="1.2" fill="none" />
      </g>
    </svg>
  );
}

export function BillyClubsSVG({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes radarRipple {
          0% { transform: scale(0.5); opacity: 0.9; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        @keyframes clubsImpact {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); filter: drop-shadow(0 0 8px rgba(217,4,41,0.8)); }
        }
        .anim-radar {
          animation: radarRipple 2s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
          transform-origin: 50px 50px;
        }
        .anim-clubs-shake {
          animation: clubsImpact 2.4s ease-in-out infinite;
          transform-origin: 50px 50px;
        }
      `}</style>

      {/* Radar Acoustic Waves */}
      <circle cx="50" cy="50" r="34" stroke="#ef233c" strokeWidth="1.5" strokeDasharray="4 4" className="anim-radar" />
      <circle cx="50" cy="50" r="22" stroke="#d90429" strokeWidth="1.5" className="anim-radar" style={{ animationDelay: '0.6s' }} />

      {/* Crossed Red Batons */}
      <g className="anim-clubs-shake">
        <line x1="18" y1="18" x2="82" y2="82" stroke="#d90429" strokeWidth="6" strokeLinecap="round" />
        <line x1="82" y1="18" x2="18" y2="82" stroke="#ef233c" strokeWidth="6" strokeLinecap="round" />
        {/* Grip End Caps */}
        <line x1="18" y1="18" x2="26" y2="26" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
        <line x1="82" y1="18" x2="74" y2="26" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
        <circle cx="50" cy="50" r="5" fill="#111" stroke="#fff" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function ChaosHexSVG({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes hexRotateCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes hexRotateCCW {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes hexGlowPulse {
          0%, 100% { filter: drop-shadow(0 0 3px rgba(224,30,55,0.6)); }
          50% { filter: drop-shadow(0 0 10px rgba(255,77,109,0.95)); }
        }
        .anim-hex-cw {
          animation: hexRotateCW 12s linear infinite;
          transform-origin: 50px 50px;
        }
        .anim-hex-ccw {
          animation: hexRotateCCW 8s linear infinite;
          transform-origin: 50px 50px;
        }
        .anim-hex-glow {
          animation: hexGlowPulse 2s ease-in-out infinite;
        }
      `}</style>
      <g className="anim-hex-glow">
        <circle cx="50" cy="50" r="43" stroke="#e01e37" strokeWidth="2" strokeDasharray="6 4" className="anim-hex-cw" />
        <polygon points="50,14 81,32 81,68 50,86 19,68 19,32" stroke="#ff4d6d" strokeWidth="2.2" className="anim-hex-ccw" />
        <circle cx="50" cy="50" r="16" fill="#d00000" opacity="0.65" />
        <circle cx="50" cy="50" r="7" fill="#ffffff" />
      </g>
    </svg>
  );
}

export function VibraniumNecklaceSVG({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes vibraniumPulse {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(157,78,221,0.5)); transform: scale(1); }
          50% { filter: drop-shadow(0 0 10px rgba(199,125,255,1)); transform: scale(1.05); }
        }
        .anim-necklace-glow {
          animation: vibraniumPulse 2.4s ease-in-out infinite;
          transform-origin: 50px 50px;
        }
      `}</style>
      <g className="anim-necklace-glow">
        <path d="M18 30 Q50 82 82 30" stroke="#9d4edd" strokeWidth="3" fill="none" />
        {[...Array(9)].map((_, i) => {
          const x = 22 + i * 7;
          const y = 34 + Math.sin((i / 8) * Math.PI) * 28;
          return (
            <polygon
              key={i}
              points={`${x},${y} ${x - 3.5},${y - 9} ${x + 3.5},${y - 9}`}
              fill="#e0aaff"
              stroke="#ffffff"
              strokeWidth="1"
            />
          );
        })}
      </g>
    </svg>
  );
}

export function TaoMandalaSVG({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes mandalaSpinCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes mandalaSpinCCW {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes mandalaPulseGlow {
          0%, 100% { filter: drop-shadow(0 0 3px rgba(247,127,0,0.5)); opacity: 0.85; }
          50% { filter: drop-shadow(0 0 10px rgba(255,170,0,1)); opacity: 1; }
        }
        .anim-mandala-cw {
          animation: mandalaSpinCW 18s linear infinite;
          transform-origin: 50px 50px;
        }
        .anim-mandala-ccw {
          animation: mandalaSpinCCW 12s linear infinite;
          transform-origin: 50px 50px;
        }
        .anim-mandala-glow {
          animation: mandalaPulseGlow 2.5s ease-in-out infinite;
        }
      `}</style>
      <g className="anim-mandala-glow">
        <circle cx="50" cy="50" r="45" stroke="#f77f00" strokeWidth="2" strokeDasharray="8 4" className="anim-mandala-cw" />
        <circle cx="50" cy="50" r="38" stroke="#fcbf49" strokeWidth="1.2" strokeDasharray="3 3" />
        <g className="anim-mandala-ccw">
          <rect x="25" y="25" width="50" height="50" stroke="#ffaa00" strokeWidth="1.5" transform="rotate(45 50 50)" />
          <rect x="25" y="25" width="50" height="50" stroke="#ffaa00" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="24" stroke="#ffd166" strokeWidth="1" strokeDasharray="4 2" />
        </g>
        <circle cx="50" cy="50" r="10" fill="#f77f00" opacity="0.6" />
        <circle cx="50" cy="50" r="5" fill="#ffffff" />
      </g>
    </svg>
  );
}

// =========================================================================
// 4. CHARGE MODAL
// =========================================================================

export function CharacterMomentOverlay({
  heroType,
  onFinish
}: {
  heroType: string | null;
  onFinish: () => void;
}) {
  React.useEffect(() => {
    if (!heroType) return;
    const timer = setTimeout(onFinish, 1200);
    return () => clearTimeout(timer);
  }, [heroType, onFinish]);

  if (!heroType) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
      <div className="w-full h-full relative flex items-center justify-center bg-black/60 backdrop-blur-md">
        <div className="absolute w-[340px] h-[340px] rounded-full bg-cyan-400/20 blur-[100px] animate-ping" />
        <div className="text-center p-8 border-2 border-cyan-400 bg-black/90 rounded-2xl shadow-[0_0_80px_rgba(0,245,212,0.8)] animate-bounce">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
            [AVENGERS PROTOCOL INITIALIZED]
          </span>
          <span className="text-3xl font-black text-white font-mono tracking-wider uppercase">
            ⚡ {heroType} ARTIFACT DISCHARGED
          </span>
        </div>
      </div>
    </div>
  );
}