/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import PrismaEditor from './components/PrismaEditor';
import ThemeBuilder from './components/ThemeBuilder';
import { Button } from './components/ui/button';
import { Textarea } from './components/ui/textarea';
import { Field } from './types';

export default function App() {
  const [fields, setFields] = useState<Field[]>([
    { id: '1', name: 'id', type: 'String', attributes: '@id @default(cuid())', isPublished: false, isRequired: true },
    { id: '2', name: 'slug', type: 'String', attributes: '@unique', isPublished: true, isRequired: true },
    { id: '3', name: 'title', type: 'String', attributes: '', isPublished: true, isRequired: true },
    { id: '4', name: 'content', type: 'Json', attributes: '', isPublished: false, isRequired: false },
    { id: '5', name: 'published', type: 'Boolean', attributes: '@default(false)', isPublished: true, isRequired: true },
  ]);

  const handleTogglePublished = (id: string) => {
    setFields(fields.map(f => f.id === id ? { ...f, isPublished: !f.isPublished } : f));
  };

  const handleToggleRequired = (id: string) => {
    setFields(fields.map(f => f.id === id ? { ...f, isRequired: !f.isRequired } : f));
  };

  const visibleFields = fields.filter(f => f.isPublished);

  return (
    <div className="flex flex-col h-screen w-full bg-background text-foreground font-sans overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="h-12 border-b border-border flex items-center justify-between px-4 bg-card shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center font-bold text-primary-foreground">C</div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold leading-tight font-heading">CMS_Flow_v1.0</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono">NextJS 16+ App Router</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-2 py-1 bg-muted rounded text-[11px] border border-border">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span>SQLite Connected</span>
          </div>
          <Button size="sm" className="h-7 text-[11px] font-heading font-medium">Publish Project</Button>
        </div>
      </header>

      <main className="flex flex-1 min-h-0 overflow-hidden">
        {/* Left Sidebar: Component Library */}
        <aside className="w-56 border-r border-border bg-background flex flex-col shrink-0">
          <div className="p-3 border-b border-border flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase text-muted-foreground font-heading">Components</span>
            <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          </div>
          <div className="flex-1 p-2 space-y-2 overflow-y-auto">
            <div className="p-2 bg-muted/50 border border-border rounded cursor-grab hover:border-primary group transition-colors">
              <div className="text-[11px] font-medium text-foreground">Hero Section</div>
              <div className="text-[9px] text-muted-foreground mt-1 uppercase">Display / Animation</div>
            </div>
            <div className="p-2 bg-muted/50 border border-border rounded cursor-grab hover:border-primary transition-colors">
              <div className="text-[11px] font-medium text-foreground">Feature Grid</div>
              <div className="text-[9px] text-muted-foreground mt-1 uppercase">Layout / List</div>
            </div>
            <div className="p-2 bg-muted/50 border border-border rounded cursor-grab hover:border-primary transition-colors">
              <div className="text-[11px] font-medium text-foreground">Data Table</div>
              <div className="text-[9px] text-muted-foreground mt-1 uppercase">Dynamic / Prisma</div>
            </div>
            <div className="p-2 bg-muted/50 border border-border rounded cursor-grab hover:border-primary transition-colors">
              <div className="text-[11px] font-medium text-foreground">Rich Text Editor</div>
              <div className="text-[9px] text-muted-foreground mt-1 uppercase">Input / Content</div>
            </div>
            <div className="p-4 mt-4 border-t border-border">
              <span className="text-[10px] text-muted-foreground uppercase font-heading">Database Models</span>
              <div className="mt-2 space-y-1">
                <div className="text-[11px] flex items-center gap-2 text-primary/80"><span className="w-1 h-1 bg-primary/80 rounded-full"></span> User</div>
                <div className="text-[11px] flex items-center gap-2 text-primary/80"><span className="w-1 h-1 bg-primary/80 rounded-full"></span> Session</div>
                <div className="text-[11px] flex items-center gap-2 text-primary/80"><span className="w-1 h-1 bg-primary/80 rounded-full"></span> ContentNode</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Canvas Area */}
        <section className="flex-1 bg-muted/20 p-6 flex flex-col items-center overflow-hidden">
          <div className="w-full max-w-2xl h-full bg-card rounded-lg shadow-xl border border-border flex flex-col overflow-hidden">
            {/* Canvas Toolbar */}
            <div className="h-10 border-b border-border bg-muted/30 px-4 flex items-center justify-between shrink-0">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-border"></div>
                <div className="w-3 h-3 rounded-full bg-border"></div>
                <div className="w-3 h-3 rounded-full bg-border"></div>
              </div>
              <span className="text-[11px] text-muted-foreground font-mono">localhost:3000/editor/home</span>
              <div className="flex gap-2 text-muted-foreground">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
            </div>
            
            {/* Canvas Preview Content */}
            <div className="flex-1 overflow-auto p-8 text-foreground">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-xl font-heading font-bold">Page Content</h1>
                  <p className="text-sm text-muted-foreground mt-1">Manage dynamically generated content pages.</p>
                </div>
                <Button size="sm" className="font-heading font-semibold">Create New</Button>
              </div>

              <div className="rounded-md border border-border overflow-hidden">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted/50 text-muted-foreground text-xs uppercase font-mono border-b border-border">
                    <tr>
                      {visibleFields.map(field => (
                        <th key={field.id} className="px-4 py-3 font-medium">
                          {field.name}
                          {field.isRequired && <span className="text-primary ml-1">*</span>}
                        </th>
                      ))}
                      <th className="px-4 py-3 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[1, 2, 3].map((row) => (
                      <tr key={row} className="hover:bg-muted/30 transition-colors">
                        {visibleFields.map(field => (
                          <td key={field.id} className="px-4 py-3">
                            <span className="bg-muted px-2 py-1 rounded text-xs border border-border/50 text-foreground/80 font-mono">
                              data_{field.name}_{row}
                            </span>
                          </td>
                        ))}
                        <td className="px-4 py-3 text-right">
                          <Button variant="ghost" size="sm" className="text-xs h-7 text-muted-foreground hover:text-foreground">Edit</Button>
                        </td>
                      </tr>
                    ))}
                    {visibleFields.length === 0 && (
                      <tr>
                        <td colSpan={10} className="px-4 py-8 text-center text-muted-foreground italic text-sm">
                          No fields published to UI.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Right Sidebar: Properties & AI */}
        <aside className="w-[300px] border-l border-border bg-background flex flex-col shrink-0 overflow-y-auto">
          {/* AI Integration Section */}
          <div className="p-4 bg-primary/5 border-b border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1 bg-primary text-primary-foreground rounded">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/></svg>
              </div>
              <span className="text-xs font-heading font-bold text-primary uppercase tracking-tight">AI Workflow Architect</span>
            </div>
            <Textarea className="min-h-[80px] text-[11px] mb-2 font-sans" placeholder="Describe a workflow or component to generate..." />
            <Button size="sm" className="w-full text-[11px] font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all font-heading">
              Generate Component
            </Button>
          </div>

          <div className="p-4 border-b border-border/50">
             <ThemeBuilder />
          </div>

          {/* Prisma Schema View */}
          <PrismaEditor 
            fields={fields} 
            onTogglePublished={handleTogglePublished} 
            onToggleRequired={handleToggleRequired} 
          />
        </aside>
      </main>

      {/* Bottom Status Bar */}
      <footer className="h-7 bg-[#010409] border-t border-[#2D333B] flex items-center justify-between px-3 shrink-0 text-[10px] text-slate-500">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="text-indigo-400 font-bold">TS</span>
            <span>Strict Mode Active</span>
          </div>
          <div className="w-px h-3 bg-slate-800"></div>
          <span>Build: <span className="text-slate-300">v0.4.12-alpha</span></span>
        </div>
        <div className="flex items-center gap-4">
          <span>RAM: 142MB</span>
          <span>Latency: 12ms</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-slate-300">Server Ready</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
