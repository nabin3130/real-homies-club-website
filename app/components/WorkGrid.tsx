import Image from "next/image";
import Link from "next/link";
import { workItems, type WorkItem } from "../data/work";

function WorkTile({ item }: { item: WorkItem }) {
  const content = (
    <>
      <div className="work-tile-image">
        {item.image ? (
          <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 560px) 100vw, 50vw" />
        ) : (
          <span className="work-image-needed">Image needed</span>
        )}
      </div>
      <div className="work-tile-copy">
        <h3>{item.title}</h3>
        <p>{item.type}</p>
        <p className="work-tile-place">{item.location} · {item.date}</p>
      </div>
    </>
  );

  if (item.internalUrl) return <Link className="work-tile" href={item.internalUrl}>{content}</Link>;
  if (item.externalUrl) return <a className="work-tile" href={item.externalUrl} target="_blank" rel="noopener noreferrer">{content}</a>;
  return <article className="work-tile">{content}</article>;
}

export function WorkGrid() {
  return <div className="work-tile-grid">{workItems.map((item) => <WorkTile key={item.title} item={item} />)}</div>;
}
