export default function Card({ title, description }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  