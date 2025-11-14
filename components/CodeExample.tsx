interface CodeExampleProps {
  code: string;
  language?: string;
}

export default function CodeExample({ code, language = 'javascript' }: CodeExampleProps) {
  return (
    <div className="my-4">
      <div className="bg-gray-800 rounded-t-lg px-4 py-2 flex items-center justify-between">
        <span className="text-gray-400 text-sm font-mono">{language}</span>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <pre className="bg-gray-900 text-gray-100 rounded-b-lg p-4 overflow-x-auto">
        <code className="text-sm font-mono">{code}</code>
      </pre>
    </div>
  );
}
