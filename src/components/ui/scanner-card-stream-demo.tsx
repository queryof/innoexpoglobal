"use client";

import React from "react";
import { ScannerCardStream } from "@/components/ui/scanner-card-stream";

export default function DemoOne() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-6">
      <ScannerCardStream />
    </div>
  );
}
