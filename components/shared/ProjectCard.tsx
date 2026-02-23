import Image from "next/image";
import { ProjectInterface } from "@/common/interface/DataInterface";

interface ProjectCardProps {
  project: ProjectInterface;
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  const num = String(index + 1).padStart(2, "0");
  const { detail, src } = project;

  return (
    <article
      className="project-card group relative rounded-2xl overflow-hidden cursor-pointer bg-primary-gray"
      onClick={onClick}
      data-aos="fade-up"
      data-aos-delay={`${index * 100}`}
    >
      {/* Image wrapper with fixed aspect ratio */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="project-card-img object-cover"
          src={src}
          alt={detail.project}
        />

        {/* Permanent dim base so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Watermark index number */}
        <span className="absolute top-3 right-4 text-white/15 font-black text-6xl leading-none select-none pointer-events-none">
          {num}
        </span>

        {/* Always-visible title at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 transition-opacity duration-300 group-hover:opacity-0">
          <p className="text-white font-bold text-base leading-snug drop-shadow-md">
            {detail.project}
          </p>
        </div>

        {/* Slide-up hover overlay */}
        <div className="project-card-overlay absolute inset-0 flex flex-col justify-end px-5 pb-5 gap-2">
          <p className="text-primary-yellow text-[10px] font-bold uppercase tracking-[0.15em]">
            {detail.role}
          </p>
          <p className="text-white font-bold text-lg leading-snug">
            {detail.project}
          </p>
          <p className="text-gray-300 text-xs leading-relaxed line-clamp-2">
            {detail.description}
          </p>

          <div className="pt-2">
            <span className="card-cta-btn">
              View Project
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Yellow accent bar that slides in from left */}
      <div className="project-card-accent" />
    </article>
  );
};

export default ProjectCard;
