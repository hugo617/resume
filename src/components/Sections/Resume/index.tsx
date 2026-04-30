import {FC, memo, useMemo} from 'react';

import {useLocale} from '../../../context/LocaleContext';
import {SectionId, skillLevels} from '../../../data/data';
import {SkillGroup as SkillGroupType} from '../../../data/dataDef';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const {strings} = useLocale();

  const skillsWithLevels = useMemo(() => {
    return strings.skills.map((group, groupIndex) => ({
      name: group.name,
      skills: group.skills.map((skill, skillIndex) => ({
        name: skill.name,
        level: skillLevels[groupIndex][skillIndex].level,
      })),
    })) as SkillGroupType[];
  }, [strings.skills]);

  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title={strings.resume.education}>
          {strings.education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={strings.resume.work}>
          {strings.experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={strings.resume.skills}>
          <p className="pb-8">{strings.resume.skillsDescription}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skillsWithLevels.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
