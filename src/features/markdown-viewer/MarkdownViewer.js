import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMarkdownContent, processMarkdown } from "./markdownViewerSlice";
import styles from "./MarkdownViewer.module.css";
import ReactMarkdown from "react-markdown";

export function MarkdownViewer() {
  const MarkdownContent = useSelector(selectMarkdownContent);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <textarea
          className={styles.textbox}
          aria-label="Set Markdown value"
          value={MarkdownContent}
          id="editor"
          onChange={(e) => dispatch(processMarkdown(e.target.value))}
        />
        <div className={styles.markdownViewport} id="preview">
          <ReactMarkdown>{MarkdownContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
