import { gridItems } from '@/data/index'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            {gridItems.map(({ id, title, titleClassName, img, description, className, spareImg, imgClassName, skills}) => (
                <BentoGridItem 
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
                skills={skills}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid