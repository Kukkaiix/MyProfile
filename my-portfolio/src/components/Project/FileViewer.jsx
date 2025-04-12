import React from 'react';

const FileViewer = ({ file }) => {
  if (!file) {
    return <div className="text-center text-gray-500">Select a file to view its content</div>;
  }

  const { type, content, url } = file;

  if (type.startsWith('image/')) {
    return (
      <div className="flex justify-center items-center h-full">
        <img src={url} alt={file.name} className="max-w-full max-h-full" />
      </div>
    );
  }

  if (type === 'text/html') {
    return (
      <iframe
        srcDoc={content}
        title={file.name}
        className="w-full h-full border border-[#3c3c3c] rounded"
      />
    );
  }

  if (type === 'application/json') {
    try {
      const json = JSON.parse(content);
      return (
        <pre className="bg-[#1e1e1e] p-4 rounded border border-[#3c3c3c] overflow-auto">
          {JSON.stringify(json, null, 2)}
        </pre>
      );
    } catch (e) {
      return <div className="text-red-500">Invalid JSON</div>;
    }
  }

  // Default: plain text
  return (
    <pre className="bg-[#1e1e1e] p-4 rounded border border-[#3c3c3c] overflow-auto">
      {content}
    </pre>
  );
};

export default FileViewer;