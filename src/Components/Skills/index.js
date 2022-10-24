import './index.scss';

const SKILLSETS = [
    { category: 'Programming', tool: 'HTML5', progress: '95%', level: 'Pro' },
    { category: 'Programming', tool: 'CSS3', progress: '90%', level: 'Pro' },
    { category: 'Programming', tool: 'JavaScript', progress: '50%', level: 'Intermediate' },
    { category: 'Programming', tool: 'React', progress: '25%', level: 'Beginner' },
    { category: 'Programming', tool: 'Sass', progress: '90%', level: 'Pro' },
    { category: 'Programming', tool: 'Python 3', progress: '25%', level: 'Beginner' },
    { category: 'Project Management', tool: 'Git', progress: '80%', level: 'Pro' },
    { category: 'Project Management', tool: 'GitHub', progress: '75%', level: 'Expert' },
    { category: 'Project Management', tool: 'Slack', progress: '85%', level: 'Pro' }
];

function SkillSetCategoryRow ({ category }) {
    return (
        <div className="skillcategoryrow">
            <h4>{category}</h4>
        </div>
    );
}

function SkillLevelRow ({ skillset, skill }) {

    return (
        <div className='tools'>

            <div className='tech'>
                <span>{skillset.tool}</span>
            </div>

            <div className='skillevel'>
                <div className='progress'>
                    <div className='progressFill' style={{
                            backGround: '#8de2fa',
                            width: skillset.progress
                        }}>
                    </div>
                </div>

                <div className='level'>
                    <span>{skillset.level}</span>
                </div>
            </div>
        </div>
    );
}

function SkillSetSection ({ skillsets }) {
    const rows = [];
    let lastSkillSetCategory = null;

    skillsets.forEach(skillset => {
        if(skillset.category !== lastSkillSetCategory) {
            rows.push(
                <SkillSetCategoryRow 
                key={skillset.category}
                category={skillset.category}/>
            );
        }

        rows.push(
            <SkillLevelRow 
            key={skillset.tool}
            skillset={skillset}/>
        );
        lastSkillSetCategory = skillset.category;

    })

    return (

        <section className='skillsetsection'>
            {rows}
        </section>
    );
}

function FullSkillSetSection ({ skillsets }) {
   return (
        <div>
            <SkillSetSection skillsets={skillsets} />
        </div>
   );
}

export default function Skillbar () {
    return (
        <div className='skillbar'>
            <FullSkillSetSection skillsets={SKILLSETS} />
        </div>
    );
}