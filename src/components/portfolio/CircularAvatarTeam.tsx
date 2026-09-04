import React, { useEffect, useState } from 'react';

export interface TeamMember {
  id: string | number;
  name: string;
  role: string;
  avatar: string;
}

export interface CircularAvatarTeamProps {
  members: TeamMember[];
  logoText?: string;
  className?: string;
}

const TeamAvatar: React.FC<{ member: TeamMember; delay: number; isVisible: boolean }> = ({
  member,
  delay,
  isVisible,
}) => {
  return (
    <div
      className="group relative w-full h-full flex items-center justify-center p-[3%] transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="relative w-full h-full aspect-square rounded-full bg-[#6B4EFF] overflow-hidden transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(107,78,255,0.6)] cursor-pointer">
        {/* Halftone dot pattern */}
        <svg
          className="absolute inset-0 w-full h-full z-20 pointer-events-none opacity-40 transition-opacity duration-300 group-hover:opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id={`dots-${member.id}`}
              x="0"
              y="0"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.2" fill="#4030A0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#dots-${member.id})`} />
        </svg>

        <img
          src={member.avatar}
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-110"
          style={{ mixBlendMode: 'luminosity' }}
        />

        <div
          className="absolute inset-0 bg-[#5038D0] transition-all duration-500 group-hover:opacity-20"
          style={{ mixBlendMode: 'color', opacity: 0.9 }}
        />

        <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0" />
        <div className="absolute inset-0 rounded-full border-2 border-white/0 transition-all duration-500 group-hover:border-white/30 group-hover:scale-105" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent z-20 transition-opacity duration-300 group-hover:from-black/70" />

        <div className="absolute bottom-2 left-1 right-1 text-center z-30 transition-all duration-300 group-hover:bottom-3">
          <p className="text-white text-[6px] font-semibold leading-tight truncate transition-all duration-300 group-hover:text-[7px]">
            {member.name}
          </p>
          <p className="text-white/70 text-[5px] mt-0.5 truncate transition-all duration-300 group-hover:text-white/90">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
};

const AnimatedText: React.FC<{
  text: string;
  delay: number;
  isVisible: boolean;
  style: React.CSSProperties;
}> = ({ text, delay, isVisible, style }) => {
  return (
    <span
      className="text-white transition-all duration-1000 ease-out hover:text-[#a090ff] cursor-default"
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
          style={{ transitionDelay: `${i * 30}ms` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export const CircularAvatarTeam: React.FC<CircularAvatarTeamProps> = ({
  members,
  logoText = 'LEGION',
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getMember = (index: number) => members[index] || null;

  const textStyle: React.CSSProperties = {
    fontFamily: 'Syne, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: 0.85,
    fontSize: 'clamp(60px, 16vw, 180px)',
  };

  const cellWidth = 'calc(100% / 6)';

  return (
    <div className={`relative w-full bg-black overflow-hidden ${className}`}>
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, rgba(107,78,255,0.15) 0%, transparent 50%)',
          opacity: isVisible ? 0.3 : 0,
        }}
      />

      {/* Section label */}
      <div
        className="absolute top-6 left-8 z-50 transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-16px)',
        }}
      >
        <div className="flex items-center gap-2">
          <span className="font-space-mono text-[#6B4EFF] text-xs">04 / Team</span>
          <span className="inline-block w-8 h-px bg-[#6B4EFF]/50" />
          <span className="font-space-mono text-white/40 text-[10px] uppercase tracking-widest">
            {logoText}
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="w-full flex items-center justify-center px-4 md:px-8 py-16 pt-16">
        <div className="w-full max-w-[1200px]" style={{ aspectRatio: '6 / 4' }}>

          {/* Row 1 */}
          <div className="flex items-center justify-end h-1/4">
            <div className="flex items-center justify-end" style={{ width: `calc(${cellWidth} * 3)` }}>
              <AnimatedText text="Meet" delay={0} isVisible={isVisible} style={textStyle} />
            </div>
            {[0, 1, 2].map((idx) => (
              <div key={idx} style={{ width: cellWidth, height: '100%' }}>
                {getMember(idx) && (
                  <TeamAvatar member={getMember(idx)!} delay={100 + idx * 50} isVisible={isVisible} />
                )}
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-end h-1/4">
            {[3, 4].map((idx) => (
              <div key={idx} style={{ width: cellWidth, height: '100%' }}>
                {getMember(idx) && (
                  <TeamAvatar member={getMember(idx)!} delay={250 + (idx - 3) * 50} isVisible={isVisible} />
                )}
              </div>
            ))}
            <AnimatedText text="The" delay={200} isVisible={isVisible} style={textStyle} />
            {[5, 6].map((idx) => (
              <div key={idx} style={{ width: cellWidth, height: '100%' }}>
                {getMember(idx) && (
                  <TeamAvatar member={getMember(idx)!} delay={350 + (idx - 5) * 50} isVisible={isVisible} />
                )}
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-end h-1/4">
            <div className="flex items-center justify-end" style={{ width: `calc(${cellWidth} * 3)` }}>
              <AnimatedText text="Team" delay={400} isVisible={isVisible} style={textStyle} />
            </div>
            {[7, 8, 9].map((idx) => (
              <div key={idx} style={{ width: cellWidth, height: '100%' }}>
                {getMember(idx) && (
                  <TeamAvatar member={getMember(idx)!} delay={450 + (idx - 7) * 50} isVisible={isVisible} />
                )}
              </div>
            ))}
          </div>

          {/* Row 4 */}
          <div className="flex items-center justify-end h-1/4">
            <div style={{ width: cellWidth, height: '100%' }} />
            {[10, 11, 12, 13, 14].map((idx) => (
              <div key={idx} style={{ width: cellWidth, height: '100%' }}>
                {getMember(idx) && (
                  <TeamAvatar member={getMember(idx)!} delay={600 + (idx - 10) * 50} isVisible={isVisible} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularAvatarTeam;
