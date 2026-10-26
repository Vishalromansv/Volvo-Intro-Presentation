'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AsgardWarpTransition } from '@/components/AsgardWarpTransition';
import { QuantumPortalSVG } from '@/components/QuantumPortal';
import { CharacterMomentOverlay } from '@/components/MarvelAssets';

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// GAME / QUIZ QR LINK (Update this URL anytime and the QR updates automatically!)
// ============================================================================
const GAME_QR_LINK = "https://wayground.com/admin/quiz/62d98b5d389657001e0ea7de/daily-check-in?lng=en";

// Helper function to generate a high-contrast QR code dynamically from any link
const getDynamicQrUrl = (link: string, colorHex: string = "00f5d4", bgHex: string = "090d16") => {
  const cleanColor = colorHex.replace('#', '');
  const cleanBg = bgHex.replace('#', '');
  return `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(
    link
  )}&color=${cleanColor}&bgcolor=${cleanBg}&margin=10`;
};

// 4-Slide Presentation Deck for Absenteeism & Overtime
const ABSENTEEISM_PPT_SLIDES = [
  {
    title: "Maintenance Spend System Gaps",
    subtitle: "Volvo Group Plant Efficiency Analysis",
    contentLeftHeading: "How cost lands today",
    contentLeftText: "Spares are not treated as Inventory, posted against cost center. Manual excel data maintained for inventory.\n\nContractors and AMCs post to cost-center GLs through service POs.\n\nIn-house technicians sit in department payroll.",
    contentRightHeading: "What we cannot answer",
    contentRightText: "• Which machines and lines consume the most?\n• How much is breakdown versus planned work?\n• Should we repair or replace this asset?\n• Is the spend buying us uptime?",
    footer: "Result: Two cost-center total a month, with no machine, no reason and no trend behind it."
  },
  {
    title: "Absenteeism & Overtime Impact",
    subtitle: "Conversion Cost and BC Hours per Truck",
    contentLeftHeading: "The Challenge",
    contentLeftText: "Unplanned absenteeism creates line imbalances, forcing overtime hours and driving up direct conversion costs per manufactured truck.",
    contentRightHeading: "The Solution & Insights",
    contentRightText: "• Analyzed labor efficiency and productivity variations across shifts.\n• Highlighted optimal staffing thresholds and cost optimization opportunities.\n• Integrated live Power BI metrics for shift supervisors.",
    footer: "Impact: Actionable labor planning resulting in reduced conversion overhead."
  },
  {
    title: "Data-Driven Cost Saving Framework",
    subtitle: "Financial & Operational Tracking",
    contentLeftHeading: "Data Architecture",
    contentLeftText: "Processed plant attendance, shift logs, and production output datasets using Python (Pandas/NumPy) and SQL pipelines.",
    contentRightHeading: "Key Deliverables",
    contentRightText: "• Automated absenteeism tracking reports.\n• Material availability correlation with labor bottlenecks.\n• Executive dashboards for plant leadership.",
    footer: "Outcome: Enhanced workforce visibility and streamlined cost control."
  },
  {
    title: "Leadership & Enterprise Execution",
    subtitle: "Operational Excellence at Volvo Bangalore",
    contentLeftHeading: "Core Focus",
    contentLeftText: "Bridging data analytics with shop-floor execution to improve overall equipment effectiveness (OEE) and labor productivity.",
    contentRightHeading: "Tech Stack Deployed",
    contentRightText: "• Python & SQL Analytics\n• Power BI Dashboards\n• Process Optimization",
    footer: "Summary: Driving sustainable plant efficiency and smart manufacturing insights."
  }
];

const MILESTONES = [
  {
    id: 'hero-spiderman',
    progress: 0.08,
    align: 'left' as const,
    timestamp: 'Activity 1',
    name: 'Absenteeism & Overtime',
    role: 'Impact on Conversion Cost and BC Hours per Truck',
    themeColor: '#f72585',
    glowColor: 'rgba(247, 37, 133, 0.65)',
    desc: 'Analyzes the impact of absenteeism and overtime on conversion costs and BC hours per truck, highlighting labor efficiency, productivity variations, and cost optimization opportunities.',
    tags: ['Absenteeism Report', 'Material Availability'],
    projectUrl: 'https://github.com/Vishal-Vishwakarma',
    imagePath: '/images/4x2.png',
    subImagePath: '/images/Container 4x2.png',
    isPresentation: true
  },
  {
    id: 'hero-ironman',
    progress: 0.16,
    align: 'right' as const,
    timestamp: 'Internship',
    name: 'IRON MAN',
    role: 'AI Intern at Futurense',
    themeColor: '#00f5d4',
    glowColor: 'rgba(0, 245, 212, 0.65)',
    desc: 'Built and orchestrated agentic workflows using LangChain for real-time data retrieval and business logic execution.',
    tags: ['Python', 'MySQL', 'NLP', 'LangChain'],
    projectUrl: 'https://github.com/Vishal-Vishwakarma',
    imagePath: '/images/6x4.png',
    subImagePath: '/images/Vessel carrier 6x4.png',
    isPresentation: false
  },
  {
    id: 'hero-wolverine',
    progress: 0.31,
    align: 'left' as const,
    timestamp: 'Project 1',
    name: 'WOLVERINE',
    role: 'IT Asset Management (Volvo)',
    themeColor: '#ffb703',
    glowColor: 'rgba(255, 183, 3, 0.65)',
    desc: 'Developed a hardware tracking application to manage IT inventory, employee allocations, and equipment transfers. Designed a PostgreSQL-based backend to improve data reliability and enable dynamic Excel report generation for efficient management reporting.',
    tags: ['React (Next.js)', 'FastAPI', 'Python', 'Supabase', 'Tailwind CSS', 'Pandas'],
    projectUrl: 'https://roova-platform-web-dusky.vercel.app/',
    imagePath: '/images/8x4.png',
    subImagePath: '/images/Mining 8x4.png',
    isPresentation: false
  },
  {
    id: 'hero-cap',
    progress: 0.40,
    align: 'right' as const,
    timestamp: 'Project 2',
    name: 'CAPTAIN AMERICA',
    role: 'Roova',
    themeColor: '#0077b6',
    glowColor: 'rgba(0, 119, 182, 0.65)',
    desc: 'Developed a SaaS platform for salons and spas with online booking, Google authentication, and admin/shop owner dashboards. Managed multiple shops through a centralized service platform.',
    tags: ['Python', 'Next.js', 'SWR', 'PostgreSQL', 'React'],
    projectUrl: 'https://roova-platform-web-dusky.vercel.app/',
    imagePath: '/images/10x4.png',
    subImagePath: '/images/10x4 offroad.png',
    isPresentation: false
  },
  {
    id: 'hero-thor',
    progress: 0.49,
    align: 'left' as const,
    timestamp: 'Project 3',
    name: 'THOR',
    role: 'Volvo Cafeteria',
    themeColor: '#4cc9f0',
    glowColor: 'rgba(76, 201, 240, 0.7)',
    desc: 'Developed a Cafeteria system in which employees use their Access card tap on machine and get the standard lunch. Works on tokens where every tap deducts 1 token from their balance.',
    tags: ['Python', 'PostgreSQL', 'Vercel', 'Node.js', 'TypeScript', 'Next.js', 'FastAPI'],
    projectUrl: 'https://cafeteria-eta-gilt.vercel.app/',
    imagePath: '/images/Glossy Red.png',
    subImagePath: '/images/Glossy Red Haul.png',
    isPresentation: false
  },
  {
    id: 'hero-hulk',
    progress: 0.58,
    align: 'right' as const,
    timestamp: 'Project 4',
    name: 'HULK',
    role: 'Forklift Fleet Management System',
    themeColor: '#38b000',
    glowColor: 'rgba(56, 176, 0, 0.65)',
    desc: 'Developed a real-time tracking application where operators tap a digital factory blueprint to log precise forklift coordinates and task events (Start, Arrive, Load, Deliver), synchronizing data into a live dashboard.',
    tags: ['Python', 'Streamlit', 'Supabase', 'PostgreSQL', 'Pandas', 'Pillow'],
    projectUrl: 'https://forklift-optimization.streamlit.app/',
    imagePath: '/images/Volvo Style Heavy.png',
    subImagePath: '/images/Volvo Heavy .png',
    isPresentation: false
  },
  {
    id: 'hero-daredevil',
    progress: 0.67,
    align: 'left' as const,
    timestamp: 'Project 5',
    name: 'DAREDEVIL',
    role: 'Logi-gen',
    themeColor: '#16782e',
    glowColor: 'rgba(25, 147, 65, 0.55)',
    desc: 'Developed an Agentic AI tool that allows users to query logistics and delivery data using natural language, directly addressing ecommerce and logistics challenges. Integrated LLMs to deconstruct complex queries into executable SQL.',
    tags: ['Python', 'SQL', 'Gemini Model', 'LangChain'],
    projectUrl: 'https://logi-gen-zkekgodblyh2hgyjcay3oj.streamlit.app/',
    imagePath: '/images/Electric Truck.png',
    subImagePath: '/images/Charger.png',
    isPresentation: false
  },
  {
    id: 'hero-scarletwitch',
    progress: 0.76,
    align: 'right' as const,
    timestamp: 'Project 6',
    name: 'SCARLET WITCH',
    role: 'ARU Fish Stall | Full-Stack E-commerce Platform',
    themeColor: '#a6b5bc',
    glowColor: 'rgba(108, 125, 129, 0.7)',
    desc: 'Developed a localized e-commerce web application for real-time inventory management and secure ordering. Integrated live GPS capture and Google Maps API to calculate driving routes, enforcing strict 5 km delivery boundaries.',
    tags: ['Python', 'Streamlit', 'Supabase (PostgreSQL)', 'Google Maps API'],
    projectUrl: 'https://aru-fish-stall.streamlit.app/',
    imagePath: '/images/Volvo Iron.png',
    subImagePath: '/images/SpeedoMeter.png',
    isPresentation: false
  },
  {
    id: 'hero-blackpanther',
    progress: 0.85,
    align: 'left' as const,
    timestamp: 'Project 7',
    name: 'BLACK PANTHER',
    role: 'Med-sim.ai',
    themeColor: '#665c6e',
    glowColor: 'rgba(209, 204, 214, 0.65)',
    desc: 'Developed a virtual patient simulator using Python-based LLMs and ML to enable realistic medical training. Features AI-generated symptom profiles and differential diagnosis via decision trees.',
    tags: ['LLMs', 'ML', 'Python'],
    projectUrl: 'https://github.com/Abhigyan126/MedSim-AI',
    imagePath: '/images/4x2.png',
    subImagePath: '/images/Container 4x2.png',
    isPresentation: false
  },
  {
    id: 'hero-doctorstrange',
    progress: 0.93,
    align: 'right' as const,
    timestamp: 'Project 8',
    name: 'DOCTOR STRANGE',
    role: 'SafeSearch',
    themeColor: '#f77f00',
    glowColor: 'rgba(247, 127, 0, 0.7)',
    desc: 'SafeSearch is a mobile-first web app that lets users scan product ingredient lists using their phone camera. Uses AI to analyze the photo, identify chemicals, and provide an instant 1-10 safety rating.',
    tags: ['GenAI / LLMs', 'LangChain', 'Prompt Architecture'],
    projectUrl: 'https://safesearch-rose.vercel.app/',
    imagePath: '/images/6x4.png',
    subImagePath: '/images/Vessel carrier 6x4.png',
    isPresentation: false
  }
];

export default function MarvelBifrostPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pptModalRef = useRef<HTMLDivElement>(null);

  const [activeHeroMoment, setActiveHeroMoment] = useState<string | null>(null);
  const [isWarpingToAsgard, setIsWarpingToAsgard] = useState(false);
  const [isAppFullscreen, setIsAppFullscreen] = useState(false);

  // Single Game QR Link State (Initialized from GAME_QR_LINK constant)
  const [gameQrLink, setGameQrLink] = useState(GAME_QR_LINK);
  const [showGameQrModal, setShowGameQrModal] = useState(false);

  // PPT Modal State
  const [showPptModal, setShowPptModal] = useState(false);
  const [pptSlideIndex, setPptSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Toggle Fullscreen on the root documentElement so window scrolling continues to work smoothly
  const toggleAppFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Toggle Fullscreen specifically for the PPT Modal
  const toggleFullscreen = () => {
    if (!pptModalRef.current) return;
    if (!document.fullscreenElement) {
      pptModalRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFs = Boolean(document.fullscreenElement);
      setIsAppFullscreen(isFs && document.fullscreenElement === document.documentElement);
      setIsFullscreen(isFs && document.fullscreenElement === pptModalRef.current);
      setTimeout(() => ScrollTrigger.refresh(), 100);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x02000a, 0.0055);

    const camera = new THREE.PerspectiveCamera(54, window.innerWidth / window.innerHeight, 0.1, 1600);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const bifrostCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 3, -120),
      new THREE.Vector3(-28, -2, -280),
      new THREE.Vector3(25, 4, -460),
      new THREE.Vector3(-22, -3, -640),
      new THREE.Vector3(26, 3, -820),
      new THREE.Vector3(-24, -2, -1000),
      new THREE.Vector3(20, 4, -1180),
      new THREE.Vector3(-14, 0, -1360),
      new THREE.Vector3(0, 0, -1500)
    ]);

    const strandCount = 64;
    const bridgeWidth = 8.5;
    const curveResolution = 450;
    const linesGroup = new THREE.Group();

    const colorCenter = new THREE.Color('#ff007f');
    const colorMid = new THREE.Color('#7928ca');
    const colorOuter = new THREE.Color('#240046');

    for (let i = 0; i < strandCount; i++) {
      const normalizedPos = (i / (strandCount - 1)) * 2 - 1;
      const absRatio = Math.abs(normalizedPos);
      const offsetX = normalizedPos * (bridgeWidth / 2);

      let lineColor = new THREE.Color();
      if (absRatio < 0.3) {
        lineColor.lerpColors(colorCenter, colorMid, absRatio / 0.3);
      } else {
        lineColor.lerpColors(colorMid, colorOuter, (absRatio - 0.3) / 0.7);
      }

      const offsetPoints = bifrostCurve.getPoints(curveResolution).map(p => {
        return new THREE.Vector3(p.x + offsetX, p.y - 1.8, p.z);
      });

      const strandGeo = new THREE.BufferGeometry().setFromPoints(offsetPoints);
      const strandMat = new THREE.LineBasicMaterial({
        color: lineColor,
        transparent: true,
        opacity: 0.9 - absRatio * 0.25
      });

      linesGroup.add(new THREE.Line(strandGeo, strandMat));
    }
    scene.add(linesGroup);

    // =========================================================================
    // 3D TEAL SEMI TRUCK
    // =========================================================================
    const truckPivot = new THREE.Group();
    scene.add(truckPivot);

    const roadGlowLight = new THREE.PointLight(0xff007f, 4.5, 14, 1.8);
    roadGlowLight.position.set(0, 0.6, 0);
    truckPivot.add(roadGlowLight);

    const textureLoader = new THREE.TextureLoader();
    const truckTexture = textureLoader.load('/teal-truck.png');
    truckTexture.colorSpace = THREE.SRGBColorSpace;

    const truckGeo = new THREE.PlaneGeometry(6.5, 3.8);
    const truckMat = new THREE.MeshBasicMaterial({
      map: truckTexture,
      transparent: true,
      alphaTest: 0.05,
      side: THREE.DoubleSide
    });
    const truckMesh = new THREE.Mesh(truckGeo, truckMat);
    truckMesh.position.y = 1.9;
    truckMesh.rotation.y = Math.PI; // Face rear toward camera
    truckPivot.add(truckMesh);

    const starCount = 2200;
    const starCoords = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starCoords[i * 3] = (Math.random() - 0.5) * 600;
      starCoords[i * 3 + 1] = (Math.random() - 0.5) * 500;
      starCoords[i * 3 + 2] = (Math.random() - 0.5) * 1650 - 150;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starCoords, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xe0c3fc, size: 0.8, transparent: true, opacity: 0.6 });
    scene.add(new THREE.Points(starGeo, starMat));

    const gantries = [
      { id: 'gantry-intro', progress: 0.02, height: 4.6 },
      { id: 'gantry-education', progress: 0.23, height: 4.8 },
      { id: 'gantry-mid', progress: 0.53, height: 4.6 },
      { id: 'gantry-final', progress: 0.98, height: 4.8 }
    ];

    const gantryAnchors = gantries.map(g => {
      const pt = bifrostCurve.getPointAt(g.progress);
      return {
        id: g.id,
        pos: new THREE.Vector3(pt.x, pt.y + g.height, pt.z)
      };
    });

    const poleMaterial = new THREE.LineBasicMaterial({ color: 0xff007f, transparent: true, opacity: 0.6 });

    const cardAnchors = MILESTONES.map((m, idx) => {
      const pt = bifrostCurve.getPointAt(m.progress);
      const xOffCard = m.align === 'left' ? -7.8 : 7.8;
      const xOffMon = m.align === 'left' ? 7.8 : -7.8;

      const cardPos = new THREE.Vector3(pt.x + xOffCard, pt.y + 2.3, pt.z);
      const monPos = new THREE.Vector3(pt.x + xOffMon, pt.y + 2.5, pt.z);

      const poleGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(cardPos.x, pt.y - 1.8, cardPos.z),
        cardPos
      ]);
      scene.add(new THREE.Line(poleGeo, poleMaterial));

      return {
        id: m.id,
        monumentId: `monument-${m.id}`,
        pos: cardPos,
        monumentPos: monPos,
        phase: idx * 0.9
      };
    });

    const scrollTracker = { progress: 0.0 };

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
      onUpdate: (self) => {
        scrollTracker.progress = self.progress * 0.985;
      }
    });

    const projVec = new THREE.Vector3();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = performance.now() * 0.0022;

      const camPos = bifrostCurve.getPointAt(scrollTracker.progress);
      const lookPos = bifrostCurve.getPointAt(Math.min(scrollTracker.progress + 0.035, 1.0));

      camera.position.set(camPos.x, camPos.y + 0.85, camPos.z);
      camera.lookAt(lookPos);

      const truckT = Math.min(scrollTracker.progress + 0.012, 0.995);
      const truckPos = bifrostCurve.getPointAt(truckT);
      const forwardTangent = bifrostCurve.getTangentAt(truckT).normalize();
      const roadGroundLevel = truckPos.y - 1.76;

      truckPivot.position.set(truckPos.x, roadGroundLevel, truckPos.z);
      const lookTarget = truckPos.clone().add(forwardTangent);
      lookTarget.y = roadGroundLevel;
      truckPivot.lookAt(lookTarget);

      gantryAnchors.forEach(g => {
        const el = document.getElementById(g.id);
        if (!el) return;

        projVec.copy(g.pos);
        projVec.project(camera);
        const dist = camera.position.distanceTo(g.pos);
        const inFront = projVec.z < 1.0 && g.pos.z < camera.position.z;

        if (inFront && dist > 4 && dist < 190) {
          const x = (projVec.x * 0.5 + 0.5) * window.innerWidth;
          const y = (-(projVec.y * 0.5) + 0.5) * window.innerHeight;
          const scale = Math.max(0.3, Math.min(1.25, 36 / dist));

          let opacity = 1.0;
          if (dist < 10) opacity = (dist - 4) / 6;
          if (dist > 115) opacity = (190 - dist) / 75;

          el.style.display = 'block';
          el.style.opacity = Math.max(0, Math.min(1, opacity)).toString();
          el.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0px) scale(${scale})`;
        } else {
          el.style.display = 'none';
        }
      });

      cardAnchors.forEach(anchor => {
        const cardEl = document.getElementById(anchor.id);
        const monEl = document.getElementById(anchor.monumentId);

        if (cardEl) {
          projVec.copy(anchor.pos);
          projVec.y += Math.sin(time + anchor.phase) * 0.14;
          projVec.x += Math.cos(time * 0.8 + anchor.phase) * 0.08;
          projVec.project(camera);
          const dist = camera.position.distanceTo(anchor.pos);
          const inFront = projVec.z < 1.0 && anchor.pos.z < camera.position.z;

          if (inFront && dist > 3 && dist < 160) {
            const x = (projVec.x * 0.5 + 0.5) * window.innerWidth;
            const y = (-(projVec.y * 0.5) + 0.5) * window.innerHeight;
            const scale = Math.max(0.25, Math.min(1.2, 30 / dist));

            let opacity = 1.0;
            if (dist < 10) opacity = (dist - 3) / 7;
            if (dist > 100) opacity = (160 - dist) / 60;

            cardEl.style.display = 'block';
            cardEl.style.opacity = Math.max(0, Math.min(1, opacity)).toString();
            cardEl.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0px) scale(${scale})`;
          } else {
            cardEl.style.display = 'none';
          }
        }

        if (monEl) {
          projVec.copy(anchor.monumentPos);
          projVec.y += Math.cos(time + anchor.phase) * 0.18;
          projVec.x -= Math.sin(time * 0.8 + anchor.phase) * 0.08;
          projVec.project(camera);
          const dist = camera.position.distanceTo(anchor.monumentPos);
          const inFront = projVec.z < 1.0 && anchor.monumentPos.z < camera.position.z;

          if (inFront && dist > 4 && dist < 170) {
            const x = (projVec.x * 0.5 + 0.5) * window.innerWidth;
            const y = (-(projVec.y * 0.5) + 0.5) * window.innerHeight;
            const scale = Math.max(0.3, Math.min(1.3, 38 / dist));

            let opacity = 1.0;
            if (dist < 10) opacity = (dist - 4) / 6;
            if (dist > 110) opacity = (170 - dist) / 60;

            monEl.style.display = 'block';
            monEl.style.opacity = Math.max(0, Math.min(1, opacity)).toString();
            monEl.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0px) scale(${scale})`;
          } else {
            monEl.style.display = 'none';
          }
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      st.kill();
      renderer.dispose();
    };
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-[#02000a] text-white selection:bg-[#ff0055] font-sans overflow-x-hidden">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />

      {/* Top Cockpit HUD with Fullscreen Presentation Button */}
      <header className="fixed top-6 left-6 right-6 z-30 flex items-center justify-between border border-pink-500/30 bg-black/75 backdrop-blur-md px-6 py-3 rounded-md shadow-[0_0_25px_rgba(255,0,127,0.25)]">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-pink-500 animate-ping" />
          <span className="font-mono font-bold tracking-widest text-sm text-pink-400">
            Live
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-xs font-mono tracking-widest text-purple-300/90 animate-pulse hidden md:block">
            SCROLL DOWN TO WARP THROUGH THE TIMELINE ▼
          </div>

          <button
            onClick={toggleAppFullscreen}
            className="px-3.5 py-1.5 rounded bg-pink-500/20 hover:bg-pink-500/40 border border-pink-500/50 text-xs font-mono font-bold text-pink-300 transition-all cursor-pointer flex items-center space-x-1 shadow-md"
          >
            <span>{isAppFullscreen ? '✕ EXIT FULLSCREEN' : '🗖 FULL SCREEN EXPERIENCE'}</span>
          </button>
        </div>
      </header>

      {/* SCREEN-SPACE 3D PROJECTION LAYER */}
      <div className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none overflow-hidden">
        {/* OVERHEAD ARCHWAY 1 (INTRO GANTRY) */}
        <div
          id="gantry-intro"
          className="absolute pointer-events-auto w-[90vw] max-w-[680px] p-6 text-center rounded-xl bg-purple-950/80 border-2 border-pink-500 shadow-[0_0_40px_rgba(255,0,127,0.6)] backdrop-blur-xl"
        >
          <span className="text-2xs font-mono font-bold tracking-[0.3em] text-pink-400 uppercase block mb-1">
            Volvo
          </span>
          <h2 className="text-5xl font-black font-mono tracking-wider text-white">
            Roadshow 2026
          </h2>
          <p className="text-2xs text-purple-200 mt-2 font-mono">
            By Business Control
          </p>
        </div>

        {/* OVERHEAD ARCHWAY 2 (GAME / QUIZ QR CHECKPOINT) */}
        <div
          id="gantry-education"
          className="absolute pointer-events-auto w-[92vw] max-w-[760px] p-8 rounded-2xl bg-indigo-950/90 border-2 border-cyan-400 shadow-[0_0_55px_rgba(0,245,212,0.7)] backdrop-blur-2xl text-left"
        >
          <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3 mb-5">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
              🎮 INTERACTIVE AUDIENCE CHECKPOINT // LIVE QUIZ GAME
            </span>
            <span className="text-xs font-mono text-pink-400 font-bold animate-pulse">
              SCAN TO JOIN ↘
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-3xl font-black font-mono text-white mb-2">
                DAILY CHECK-IN QUIZ CHALLENGE
              </h3>
              <p className="text-sm font-mono text-cyan-300 font-bold mb-4">
                SCAN THE QR CODE WITH YOUR PHONE TO PLAY LIVE!
              </p>

              <div className="bg-black/55 p-4 rounded-xl border border-white/10 mb-5">
                <span className="text-[11px] font-mono font-bold text-pink-400 uppercase block mb-1">
                  GAME ROOM LINK:
                </span>
                <p className="text-xs font-mono text-gray-200 break-all leading-relaxed">
                  {gameQrLink}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={gameQrLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-mono text-xs font-black uppercase tracking-wider transition-all shadow-lg"
                >
                  PLAY GAME DIRECTLY ↗
                </a>

                <button
                  onClick={() => setShowGameQrModal(true)}
                  className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-cyan-400/50 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  🔍 ENLARGE / EDIT QR LINK
                </button>
              </div>
            </div>

            {/* Auto-Updating QR Code Image */}
            <div
              onClick={() => setShowGameQrModal(true)}
              className="shrink-0 flex flex-col items-center p-4 bg-[#090d16] border-2 border-cyan-400 rounded-2xl shadow-[0_0_35px_rgba(0,245,212,0.45)] cursor-pointer hover:scale-105 transition-transform"
              title="Click to enlarge QR Code for audience"
            >
              <img
                src={getDynamicQrUrl(gameQrLink, '00f5d4', '090d16')}
                alt="Game Quiz QR Code"
                className="w-44 h-44 object-contain rounded-lg"
              />
              <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-widest mt-2">
                📱 TAP TO FULLSCREEN QR
              </span>
            </div>
          </div>
        </div>

        {/* OVERHEAD ARCHWAY 3 (PROJECT HORIZON) */}
        <div
          id="gantry-mid"
          className="absolute pointer-events-auto w-[90vw] max-w-[680px] p-6 text-center rounded-xl bg-purple-950/80 border-2 border-green-500 shadow-[0_0_40px_rgba(56,176,0,0.6)] backdrop-blur-xl"
        >
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-green-400 uppercase block mb-1">
            PROJECT HORIZON
          </span>
          <h2 className="text-3xl font-black font-mono tracking-wider text-white">
            PRODUCTION SYSTEM BUILDS
          </h2>
          <p className="text-xs text-purple-200 mt-2 font-mono">
            Autonomous Agentic Tools, Geolocation Routing, Computer Vision & Fleet Tracking
          </p>
        </div>

        {/* OVERHEAD ARCHWAY 4 (DESTINATION REACHED & QUANTUM PORTAL) */}
        <div
          id="gantry-final"
          className="absolute pointer-events-auto flex flex-col items-center text-center p-6"
        >
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-cyan-400 uppercase block mb-2">
            DIMENSIONAL WARP // TERMINAL REACHED
          </span>
          <h2 className="text-3xl font-black font-mono tracking-wider text-white mb-4">
            ASGARD OBSERVATORY PORTAL
          </h2>

          <QuantumPortalSVG
            onClick={() => setIsWarpingToAsgard(true)}
            label="ENTER ASGARD CONTACT VAULT"
          />
        </div>

        {/* 10 SIDE BILLBOARDS & 10 STANDING HERO PEDESTALS */}
        {MILESTONES.map((m) => {
          return (
            <React.Fragment key={m.id}>
              {/* SIDE STANDING STATUE / PEDESTAL */}
              <div
                id={`monument-${m.id}`}
                className="absolute z-10 hover:z-50 pointer-events-auto cursor-pointer flex flex-col items-center group"
                onClick={() => {
                  if (m.isPresentation) {
                    setShowPptModal(true);
                  } else {
                    setActiveHeroMoment(m.name);
                  }
                }}
              >
                <div
                  style={{ filter: `drop-shadow(0 0 25px ${m.glowColor})` }}
                  className="flex flex-col items-center p-5 rounded-2xl bg-black/85 border-2 border-white/30 backdrop-blur-xl group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300"
                >
                  <img
                    src={m.imagePath}
                    alt={m.name}
                    className="w-52 h-32 object-contain mb-3 rounded filter drop-shadow-xl"
                  />
                  <img
                    src={m.subImagePath}
                    alt={`${m.name} variant`}
                    className="w-40 h-24 object-contain rounded filter drop-shadow-md opacity-95"
                  />
                </div>
              </div>

              {/* SIDE BILLBOARD */}
              <div
                id={m.id}
                className="absolute z-20 hover:z-50 pointer-events-auto w-[90vw] max-w-[640px] group"
              >
                <div
                  style={{
                    borderColor: m.themeColor,
                    boxShadow: `0 0 45px ${m.glowColor}, inset 0 0 20px ${m.glowColor}`
                  }}
                  className="rounded-2xl p-8 backdrop-blur-2xl bg-black/92 border-2 transition-transform duration-300 group-hover:scale-[1.03] group-hover:-translate-y-1.5"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">
                      {m.timestamp}
                    </span>
                  </div>

                  <h2 className="text-2xl font-black font-mono text-white leading-tight mb-1">
                    {m.name}
                  </h2>
                  <h3 className="text-sm font-bold font-mono tracking-wide mb-3" style={{ color: m.themeColor }}>
                    {m.role}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {m.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {m.tags.map((t) => (
                      <span key={t} className="text-xs font-mono px-3 py-1 rounded bg-white/5 border border-white/15 text-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={m.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ borderColor: m.themeColor, color: m.themeColor }}
                      className="flex-1 py-3 rounded text-xs font-mono font-bold uppercase tracking-wider text-center border hover:bg-white/10 transition-all flex items-center justify-center space-x-1"
                    >
                      <span>VIEW PROJECT ↗</span>
                    </a>

                    <button
                      onClick={() => {
                        if (m.isPresentation) {
                          setShowPptModal(true);
                        } else {
                          setActiveHeroMoment(m.name);
                        }
                      }}
                      style={{ backgroundColor: m.themeColor }}
                      className="flex-1 py-3 rounded text-xs font-mono font-bold text-black uppercase tracking-wider hover:brightness-125 transition-transform active:scale-95 shadow-md cursor-pointer"
                    >
                      {m.isPresentation ? 'VIEW PPT 📊' : 'DISCHARGE ARTIFACT'}
                    </button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* ===================================================================== */}
      {/* FULLSCREEN GAME QR MODAL (FOR EASY AUDIENCE SCANNING & LIVE LINK EDIT) */}
      {/* ===================================================================== */}
      {showGameQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-2xl p-4">
          <div className="relative w-full max-w-lg bg-[#090d16] border-2 border-cyan-400 rounded-2xl shadow-[0_0_80px_rgba(0,245,212,0.5)] p-8 flex flex-col items-center text-center text-white font-mono">
            <button
              onClick={() => setShowGameQrModal(false)}
              className="absolute top-4 right-4 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-xs text-gray-300 font-bold cursor-pointer"
            >
              ✕ CLOSE
            </button>

            <span className="text-xs text-cyan-400 uppercase tracking-[0.25em] mb-1 font-bold">
              🎮 LIVE AUDIENCE GAME
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
              SCAN TO JOIN THE QUIZ
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Point your phone camera at the QR code below to launch the game immediately.
            </p>

            <div className="p-5 bg-[#090d16] border-2 border-cyan-400 rounded-2xl shadow-[0_0_40px_rgba(0,245,212,0.3)] mb-6">
              <img
                src={getDynamicQrUrl(gameQrLink, '00f5d4', '090d16')}
                alt="Enlarged Game QR Code"
                className="w-72 h-72 object-contain rounded-lg"
              />
            </div>

            {/* Live URL Editor so you can also paste a new link right in the browser */}
            <div className="w-full text-left mb-5">
              <label className="text-[11px] text-cyan-300 uppercase tracking-wider block mb-1.5 font-bold">
                GAME LINK (UPDATE HERE OR IN CODE):
              </label>
              <input
                type="text"
                value={gameQrLink}
                onChange={(e) => setGameQrLink(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-black/80 border border-cyan-400/60 text-xs text-white focus:outline-none focus:border-cyan-300"
              />
            </div>

            <a
              href={gameQrLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-xs font-black text-black uppercase tracking-wider transition-all shadow-lg"
            >
              OPEN GAME IN NEW TAB ↗
            </a>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* 4-SLIDE PRESENTATION PPT MODAL (WITH SCALED UP TEXT & FULLSCREEN) */}
      {/* ===================================================================== */}
      {showPptModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 overflow-y-auto">
          <div
            ref={pptModalRef}
            className={`relative w-full ${isFullscreen ? 'max-w-none min-h-screen rounded-none p-12 md:p-20' : 'max-w-6xl rounded-2xl p-8 md:p-12'} bg-[#090d16] border-2 border-[#f72585] shadow-[0_0_90px_rgba(247,37,133,0.7)] flex flex-col justify-between text-white font-mono transition-all duration-300 my-auto`}
          >
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-[#f72585] animate-ping" />
                <span className="text-sm md:text-base tracking-[0.25em] text-[#f72585] uppercase font-bold">
                  VOLVO GROUP // EXECUTIVE PRESENTATION (SLIDE {pptSlideIndex + 1} OF {ABSENTEEISM_PPT_SLIDES.length})
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleFullscreen}
                  className="px-4 py-2 rounded bg-[#f72585]/20 hover:bg-[#f72585]/40 border border-[#f72585]/50 text-xs md:text-sm text-pink-300 font-bold transition-colors cursor-pointer flex items-center space-x-1 shadow-md"
                >
                  <span>{isFullscreen ? '✕ EXIT FULLSCREEN' : '🗖 FULLSCREEN ⛶'}</span>
                </button>

                <button
                  onClick={() => {
                    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
                    setShowPptModal(false);
                    setIsFullscreen(false);
                  }}
                  className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-xs md:text-sm text-gray-300 font-bold transition-colors cursor-pointer"
                >
                  ✕ CLOSE
                </button>
              </div>
            </div>

            {/* Slide Body */}
            <div className="my-4 flex-1 flex flex-col justify-center">
              <div>
                <span className="text-sm md:text-base text-cyan-400 tracking-widest uppercase block mb-2 font-bold">
                  {ABSENTEEISM_PPT_SLIDES[pptSlideIndex].subtitle}
                </span>
                <h3 className="text-3xl md:text-5xl font-black tracking-wide text-white mb-8">
                  {ABSENTEEISM_PPT_SLIDES[pptSlideIndex].title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-[#121824] border border-white/15 p-8 rounded-2xl shadow-xl">
                    <h4 className="text-base md:text-lg font-bold text-yellow-400 mb-4 uppercase tracking-wider">
                      {ABSENTEEISM_PPT_SLIDES[pptSlideIndex].contentLeftHeading}
                    </h4>
                    <p className="text-base md:text-lg text-gray-200 leading-relaxed whitespace-pre-line">
                      {ABSENTEEISM_PPT_SLIDES[pptSlideIndex].contentLeftText}
                    </p>
                  </div>

                  <div className="bg-[#1a2333] border border-[#f72585]/40 p-8 rounded-2xl shadow-[inset_0_0_30px_rgba(247,37,133,0.2)]">
                    <h4 className="text-base md:text-lg font-bold text-pink-400 mb-4 uppercase tracking-wider">
                      {ABSENTEEISM_PPT_SLIDES[pptSlideIndex].contentRightHeading}
                    </h4>
                    <p className="text-base md:text-lg text-gray-100 leading-relaxed whitespace-pre-line">
                      {ABSENTEEISM_PPT_SLIDES[pptSlideIndex].contentRightText}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/70 border border-white/15 px-6 py-5 rounded-xl text-base md:text-lg text-cyan-300 font-bold shadow-lg">
                {ABSENTEEISM_PPT_SLIDES[pptSlideIndex].footer}
              </div>
            </div>

            {/* Modal Navigation Controls */}
            <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-8">
              <button
                disabled={pptSlideIndex === 0}
                onClick={() => setPptSlideIndex((prev) => Math.max(0, prev - 1))}
                className={`px-6 py-3 rounded text-sm font-bold uppercase transition-all cursor-pointer ${
                  pptSlideIndex === 0
                    ? 'opacity-30 cursor-not-allowed bg-white/5 text-gray-500'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                ◀ PREV SLIDE
              </button>

              <div className="flex space-x-3">
                {ABSENTEEISM_PPT_SLIDES.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => setPptSlideIndex(idx)}
                    className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
                      pptSlideIndex === idx ? 'bg-[#f72585] scale-125 shadow-[0_0_15px_#f72585]' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <button
                disabled={pptSlideIndex === ABSENTEEISM_PPT_SLIDES.length - 1}
                onClick={() => setPptSlideIndex((prev) => Math.min(ABSENTEEISM_PPT_SLIDES.length - 1, prev + 1))}
                className={`px-6 py-3 rounded text-sm font-bold uppercase transition-all cursor-pointer ${
                  pptSlideIndex === ABSENTEEISM_PPT_SLIDES.length - 1
                    ? 'opacity-30 cursor-not-allowed bg-white/5 text-gray-500'
                    : 'bg-[#f72585] hover:bg-pink-600 text-black font-extrabold'
                }`}
              >
                NEXT SLIDE ▶
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Hero Charge Modal VFX */}
      <CharacterMomentOverlay
        heroType={activeHeroMoment}
        onFinish={() => setActiveHeroMoment(null)}
      />

      {/* Asgard Warp Jump & Contact Terminal */}
      {isWarpingToAsgard && (
        <AsgardWarpTransition onClose={() => setIsWarpingToAsgard(false)} />
      )}

      {/* Virtual Scroll Height */}
      <div ref={containerRef} className="relative w-full h-[1200vh] pointer-events-none z-20" />
    </main>
  );
}
