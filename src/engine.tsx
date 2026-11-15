import React from 'react';
export type Mode='2 letters'|'3 letters'|'Adaptive';
export function boldText(text:string,mode:Mode='3 letters',weight=750):React.ReactNode[]{
 const Segmenter=(Intl as any).Segmenter; const seg=typeof Intl!=='undefined'&&Segmenter?new Segmenter(undefined,{granularity:'word'}).segment(text):null;
 const parts=seg?[...seg].map(x=>({text:x.segment,word:x.isWordLike??false})):text.split(/(\s+|[^\p{L}\p{N}'’-]+)/u).filter(Boolean).map(x=>({text:x,word:/[\p{L}\p{N}]/u.test(x)}));
 return parts.map((p,i)=>{if(!p.word)return <React.Fragment key={i}>{p.text}</React.Fragment>;const chars=Array.from(p.text);const n=mode==='Adaptive'?(chars.length<=2?1:chars.length<=4?2:chars.length<=7?3:4):mode==='2 letters'?2:3;return <React.Fragment key={i}><strong style={{fontWeight:weight}}>{chars.slice(0,n).join('')}</strong>{chars.slice(n).join('')}</React.Fragment>;});
}
export function plainText(text:string){return text;}
export function richText(text:string,mode:Mode,weight:number){const escape=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));const Segmenter=(Intl as any).Segmenter;const segmented=Segmenter?[...new Segmenter(undefined,{granularity:'word'}).segment(text)].map((x:any)=>({text:x.segment,word:x.isWordLike??false})):text.split(/(\s+|[^\p{L}\p{N}'’-]+)/u).filter(Boolean).map(x=>({text:x,word:/[\p{L}\p{N}]/u.test(x)}));return segmented.map(({text:piece,word})=>{if(!word)return escape(piece).replace(/\n/g,'<br>');const chars=Array.from(piece),n=mode==='Adaptive'?(chars.length<=2?1:chars.length<=4?2:chars.length<=7?3:4):mode==='2 letters'?2:3;return `<b style="font-weight:${weight}">${escape(chars.slice(0,n).join(''))}</b>${escape(chars.slice(n).join(''))}`;}).join('');}
