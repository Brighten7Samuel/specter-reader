import {describe,expect,it} from 'vitest'; import {renderToStaticMarkup} from 'react-dom/server'; import {boldText,richText} from './engine';
describe('SPECTER word emphasis',()=>{
 it('emphasizes three letters by default and keeps short words intact',()=>{const html=renderToStaticMarkup(<>{boldText('Reading to focus')}</>);expect(html).toContain('<strong style="font-weight:750">Rea</strong>ding');expect(html).toContain('<strong style="font-weight:750">to</strong>');});
 it('supports two-letter and adaptive modes',()=>{expect(renderToStaticMarkup(<>{boldText('attention', '2 letters')}</>)).toContain('>at</strong>tention');expect(renderToStaticMarkup(<>{boldText('cat elephant','Adaptive')}</>)).toContain('>elep</strong>hant');});
 it('preserves punctuation, repeated spaces, line breaks, and unicode characters',()=>{const input='Café—books,  déjà!\nNext';expect(renderToStaticMarkup(<>{boldText(input)}</>)).toContain('Caf</strong>é—<strong style="font-weight:750">boo</strong>ks,  <strong style="font-weight:750">déj</strong>à!\n<strong style="font-weight:750">Nex</strong>t');});
 it('escapes HTML in rich clipboard output and retains the original plain text',()=>{const html=richText('<script>alert(1)</script>','3 letters',750);expect(html).not.toContain('<script>');expect(html).toContain('&lt;');expect(html).toContain('&gt;');});
});
