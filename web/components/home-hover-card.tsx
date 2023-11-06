'use client'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


import React from 'react';
import { useMove } from '@use-gesture/react'
import styled from "@emotion/styled"
import Image from 'next/image';
import { examples } from "@/k"

export function HomeHoverCard1() {
  return <div className='max-w-lg p-4 border border-white/10 rounded-xl'>
    <div className='flex flex-row gap-2 justify-between'>
      <Image src='/assets/home-demo-0-illust-0-web.png' width={100} height={90} alt='' />
      <Image src='/assets/home-demo-0-illust-1-cloud.png' width={100} height={90} alt='' />
      <Image src='/assets/home-demo-0-illust-2-server.png' width={100} height={90} alt='' />
    </div>
    <SyntaxHighlighter
      customStyle={{
        fontSize: 12,
        borderRadius: 12,
        background: '#08070E',
        border: 'rgba(144, 175, 255, 0.1) 1px solid',
      }}
      language='javascript' style={{
        ...dracula,
      }}>
      {examples.fetch('https://example.com')}
    </SyntaxHighlighter>
  </div >
}

export function HomeHoverCardV2() {
  const [{ x, y }, set] = React.useState({ x: 0, y: 0 });

  const bind = useMove(({ movement: [mx, my], memo }) => {
    const el = document.getElementById('card');
    const rect = el!.getBoundingClientRect();
    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;

    const rotateX = -1 * (my - halfHeight) / halfHeight * 10; // 10 is rotation strength
    const rotateY = (mx - halfWidth) / halfWidth * 10; // 10 is rotation strength

    set({ x: rotateY, y: rotateX });

    return { x: mx, y: my };
  });

  const style = {
    transform: `perspective(600px) rotateX(${y}deg) rotateY(${x}deg)`
  };

  return (
    <div className='p-40' {...bind()}>
      {/* @ts-ignore */}
      <Card id="card" className="card" style={style}>
        <Image
          className='shadow-lg shadow-white'
          src="/tmp-asset-1.png" width={470} height={540} alt="" />
      </Card>
    </div>
  );
}


const Card = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e1e1e1;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  transition: transform 0.1s;
  will-change: transform;

`