"use client";

import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export default function Setting() {
    return (
      <Button variant="outline" size="icon">
        <Settings className="h-[1.2rem] w-[1.2rem]"/>
      </Button>
    );
  }