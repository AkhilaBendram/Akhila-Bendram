type DiagramProps = {
  title?: string;
  nodes: string[];
};

export default function Diagram({ title, nodes }: DiagramProps) {
  return (
    <section className="mt-10">
      {title && (
        <h2 className="heading-section mb-4 text-neutral-100">{title}</h2>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        {nodes.map((node) => (
          <div key={node} className="card-soft p-5 flex items-center">
            <div className="dot-soft mr-3" />
            <p className="text-sm text-neutral-200">{node}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
