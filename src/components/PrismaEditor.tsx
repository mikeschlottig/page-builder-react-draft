import { Field } from '../types';

interface PrismaEditorProps {
  fields: Field[];
  onTogglePublished: (id: string) => void;
  onToggleRequired: (id: string) => void;
}

export default function PrismaEditor({ fields, onTogglePublished, onToggleRequired }: PrismaEditorProps) {
  return (
    <div className="flex-1 flex flex-col min-h-0">
      <div className="px-4 py-3 border-b border-border flex justify-between items-center">
        <span className="text-[11px] font-bold uppercase text-muted-foreground">Configuration</span>
        <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground">Schema.prisma</span>
      </div>
      <div className="flex-1 overflow-auto p-4 font-mono text-[11px] leading-relaxed">
        <div className="text-purple-400">model <span className="text-blue-400">Page</span> {"{"}</div>
        
        <div className="flex flex-col my-1">
          {fields.map(field => (
            <div key={field.id} className="group flex items-center justify-between hover:bg-muted py-0.5 pl-4 pr-1 -ml-4 -mr-1 rounded border border-transparent hover:border-border transition-colors">
              <div className={!field.isPublished ? 'opacity-40' : ''}>
                <span className="text-foreground">{field.name}</span>{' '}
                <span className="text-primary">{field.type}{!field.isRequired ? '?' : ''}</span>{' '}
                {field.attributes && <span className="text-muted-foreground">{field.attributes}</span>}
              </div>
              <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => onToggleRequired(field.id)}
                  className={`px-1.5 py-[1px] rounded text-[9px] uppercase tracking-wider font-sans font-bold flex items-center gap-1 ${
                    field.isRequired ? 'bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30' : 'bg-muted text-muted-foreground border border-border hover:bg-muted/80'
                  }`}
                  title="Toggle Required"
                >
                  REQ
                </button>
                <button
                  onClick={() => onTogglePublished(field.id)}
                  className={`px-1.5 py-[1px] rounded text-[9px] uppercase tracking-wider font-sans font-bold flex items-center gap-1 ${
                    field.isPublished ? 'bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30' : 'bg-muted text-muted-foreground border border-border hover:bg-muted/80'
                  }`}
                  title="Toggle Published"
                >
                  PUB
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-primary">{"}"}</div>
        
        <div className="mt-4 p-2 bg-card rounded border border-border">
          <div className="text-muted-foreground text-[10px] mb-2 font-sans font-bold tracking-wider">PROPS: FEATURE_GRID</div>
          <div className="flex flex-col gap-2 font-sans font-medium">
            <div className="flex justify-between items-center">
              <span className="text-foreground/80">Columns</span>
              <input type="number" defaultValue="2" className="w-[3.5rem] bg-background border border-border rounded text-center py-0.5 text-foreground outline-none focus:border-primary" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground/80">Spacing</span>
              <select className="flex-1 ml-4 bg-background border border-border rounded text-[10px] py-0.5 px-1 text-foreground outline-none focus:border-primary" defaultValue="Relaxed">
                <option>Compact</option>
                <option value="Relaxed">Relaxed</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
