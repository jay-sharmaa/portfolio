"use client";
import React, { useEffect, useState } from "react";

type Project = {
  week: string;
  language: string;
  projectName: string;
  projectLink: string;
  descriptionLink: string;
};

const parseMarkdownTable = (markdown: string): Project[] => {
  const lines = markdown.split("\n");
  const tableStartIndex = lines.findIndex((line) => line.trim().startsWith("| Week"));
  if (tableStartIndex === -1) return [];

  const tableLines = [];
  for (let i = tableStartIndex; i < lines.length; i++) {
    if (!lines[i].trim().startsWith("|")) break;
    tableLines.push(lines[i].trim());
  }

  if (tableLines.length < 3) return [];

  const rows = tableLines.slice(2);

  const extractMarkdownLink = (md: string): { text: string; url: string } => {
    const match = /\[(.*?)\]\((.*?)\)/.exec(md);
    if (match) return { text: match[1], url: match[2] };
    return { text: md, url: "" };
  };

  const projects: Project[] = rows.map((row) => {
    const cols = row
      .split("|")
      .map((c) => c.trim())
      .filter((c) => c.length > 0);

    const week = cols[0] || "";
    const language = cols[1] || "";

    const projectLinkData = extractMarkdownLink(cols[2] || "");
    const descriptionLinkData = extractMarkdownLink(cols[3] || "");

    return {
      week,
      language,
      projectName: projectLinkData.text,
      projectLink: projectLinkData.url,
      descriptionLink: descriptionLinkData.url,
    };
  });

  return projects;
};

const ProjectTable = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReadmeAndParse = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/jay-sharmaa/WeeklyProjects/main/README.md"
        );
        if (!res.ok) throw new Error("Failed to fetch README");

        const text = await res.text();
        const parsedProjects = parseMarkdownTable(text);
        setProjects(parsedProjects);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchReadmeAndParse();
  }, []);

  return (
    <section className="w-full px-6 md:px-20 py-12">
      <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
        Weekly Projects Overview
      </h2>

      <div className="overflow-x-auto rounded-xl border border-gray-700">
        <table className="min-w-full bg-[#0d0d0d] text-white">
          <thead>
            <tr className="bg-[#1a1a1a] text-purple-300 text-left">
              <th className="py-3 px-4">Index</th>
              <th className="py-3 px-4">Project</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Language</th>
            </tr>
          </thead>
          <tbody>
  {loading ? (
    <tr>
      <td colSpan={4} className="py-6 px-4 text-center text-gray-400">
        Loading projects...
      </td>
    </tr>
  ) : error ? (
    <tr>
      <td colSpan={4} className="py-6 px-4 text-center text-red-500">
        Error: {error}
      </td>
    </tr>
  ) : projects.length === 0 ? (
    <tr>
      <td colSpan={4} className="py-6 px-4 text-center text-gray-500">
        No projects found in README table.
      </td>
    </tr>
  ) : (
    projects.slice(0, 5).map(
      ({ week, projectName, projectLink, descriptionLink, language }, index) => (
        <tr
          key={index}
          className="border-t border-gray-800 hover:bg-[#1c1c1c] transition-colors"
        >
          <td className="py-3 px-4 text-gray-400">{week}</td>
          <td className="py-3 px-4">
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              {projectName}
            </a>
          </td>
          <td className="py-3 px-4">
            <a
              href={descriptionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              Description
            </a>
          </td>
          <td className="py-3 px-4">{language}</td>
        </tr>
      )
    )
  )}
</tbody>

        </table>
      </div>
    </section>
  );
};

export default ProjectTable;
