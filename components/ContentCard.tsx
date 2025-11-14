interface ContentCardProps {
  title: string;
  children: React.ReactNode;
  icon?: string;
}

export default function ContentCard({ title, children, icon }: ContentCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-l-4 border-indigo-500">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
        {icon && <span className="mr-3 text-3xl">{icon}</span>}
        {title}
      </h2>
      <div className="text-gray-900 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
