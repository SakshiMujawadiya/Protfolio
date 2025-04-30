// src/components/SectionTitle.jsx
export default function SectionTitle({ title }) {
  return (
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12 relative">
      {title}
      <span className="block w-12 h-0.5 bg-blue-500 mx-auto mt-2"></span>
    </h2>
  );
}
