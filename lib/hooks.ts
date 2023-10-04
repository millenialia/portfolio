import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section'
import type { SectionName } from '@/lib/types'


export function useSectionInView(sectionName: SectionName ) {
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    
    const { ref, inView } = useInView({
      threshold: 0.5,
  });

    useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref,

  }
}