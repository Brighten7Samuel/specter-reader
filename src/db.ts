import Dexie, {type Table} from 'dexie';
export type Book={id?:number; title:string; author:string; type:string; text:string; file?:Blob; added:number; opened:number; progress:number; pages:number;};
class SpecterDB extends Dexie { books!:Table<Book,number>; constructor(){super('specter-local');this.version(1).stores({books:'++id,title,type,added,opened'});} }
export const db=new SpecterDB();
