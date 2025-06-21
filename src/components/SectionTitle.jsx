// src/components/SectionTitle.jsx
export default function SectionTitle({ title }) {
  return (
    <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12 relative transition-colors duration-300">
      {title}
      <span className="block w-12 h-0.5 bg-blue-500 dark:bg-blue-400 mx-auto mt-2"></span>
    </h2>
  );
}
