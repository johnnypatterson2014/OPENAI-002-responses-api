"use client";
import React from "react";
import useToolsStore from "@/stores/useToolsStore";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";

export default function McpConfig() {
  const { mcpConfig, setMcpConfig } = useToolsStore();

  const handleClear = () => {
    setMcpConfig({
      server_label: "",
      server_url: "",
      allowed_tools: "",
      skip_approval: false,
    });
  };

  return (
    <div>
      <div className="flex items-start justify-between">
        <div className="text-zinc-300 text-sm">Server details</div>

      </div>
      <div className="mt-3 space-y-3 text-zinc-400">
        <div className="flex items-center gap-2">
          <label htmlFor="server_label" className="text-sm w-24">
            Label
          </label>
          <Input
            id="server_label"
            type="text"
            className="bg-zinc-900 border border-zinc-600 text-sm flex-1 text-zinc-300"
            value='deepwiki'
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="server_url" className="text-sm w-24">
            URL
          </label>
          <Input
            id="server_url"
            type="text"
            className="bg-zinc-900 border border-zinc-600 text-sm flex-1 text-zinc-300"
            value="https://mcp.deepwiki.com/mcp"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="server_url" className="text-sm w-24">
            Prompt
          </label>

        </div>

      </div>
    </div>
  );
}
