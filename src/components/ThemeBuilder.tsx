import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Switch } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";

export default function ThemeBuilder() {
  const [radius, setRadius] = useState<number[]>([0.5]);
  const [isDark, setIsDark] = useState(true); // default dark

  useEffect(() => {
    // Update Radius
    document.documentElement.style.setProperty("--radius", `${radius[0]}rem`);
  }, [radius]);

  useEffect(() => {
    // Update Dark Mode
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <Card className="w-full bg-card border-border shadow-sm">
      <CardHeader className="pb-3 border-b border-border/50">
        <CardTitle className="text-sm font-heading font-semibold">Theme Builder</CardTitle>
        <CardDescription className="text-xs">Adjust app-wide styling variables</CardDescription>
      </CardHeader>
      <CardContent className="pt-4 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-xs">Dark Mode</Label>
            <Switch checked={isDark} onCheckedChange={setIsDark} />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Border Radius</Label>
              <span className="text-xs font-mono text-muted-foreground">{radius[0]}rem</span>
            </div>
            <Slider
              value={radius}
              onValueChange={setRadius}
              max={2}
              step={0.1}
              className="mt-2"
            />
          </div>
          <div className="space-y-3 pt-2">
            <Label className="text-xs">Base Mode</Label>
            <Tabs defaultValue="zinc" className="w-full">
              <TabsList className="grid w-full grid-cols-2 h-auto p-1">
                <TabsTrigger value="zinc" className="text-xs py-1">Zinc</TabsTrigger>
                <TabsTrigger value="slate" className="text-xs py-1">Slate</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="pt-4">
            <Button variant="default" size="sm" className="w-full text-xs">
              Preview Changes
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
