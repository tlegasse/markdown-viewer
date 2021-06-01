import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMarkdownContent, processMarkdown } from './markdownViewerSlice';

export function MarkdownViewport(props) {
  const MarkdownContent = useSelector(selectMarkdownContent);
  const dispatch = useDispatch();

  const preprocessedMarkdown = props.preprocessedMarkdown;

  return (
    <div id="preview">
        {preprocessedMarkdown}
    </div>
  );
}
