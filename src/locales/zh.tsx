import {LocaleStrings} from './types';

export const zh: LocaleStrings = {
  meta: {
    title: 'React 简历模板',
    description: '基于 Tim Baker 的 React 简历模板构建的示例站点',
  },
  nav: {
    about: '关于',
    resume: '简历',
    portfolio: '作品集',
    testimonials: '推荐信',
    contact: '联系方式',
  },
  hero: {
    name: '我是 Tim Baker。',
    description: (
      <>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          我是一名位于维多利亚的<strong className="text-stone-100">全栈软件工程师</strong>，目前在{' '}
          <strong className="text-stone-100">Instant Domains</strong> 工作，帮助构建现代化的、移动优先的域名注册和建站平台。
        </p>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          在空闲时间，你可以在<strong className="text-stone-100">泰拳</strong>训练中找到我，弹奏我的
          <strong className="text-stone-100">班卓琴</strong>，或者探索美丽的
          <strong className="text-stone-100">温哥华岛</strong>。
        </p>
      </>
    ),
    resumeButton: '简历',
    generatePdfButton: '生成 PDF',
    contactButton: '联系',
  },
  about: {
    heading: '关于我',
    description: `使用这个简介部分来介绍你自己，说明你做什么，你喜欢或最擅长哪些技术，描述你的个性，或者任何你想添加的内容。`,
    items: [
      {label: '位置', text: '维多利亚，BC'},
      {label: '年龄', text: '29'},
      {label: '国籍', text: '加拿大 / 爱尔兰'},
      {label: '兴趣', text: '摩托车，泰拳，班卓琴'},
      {label: '学历', text: '维多利亚大学'},
      {label: '工作', text: 'Instant Domains, inc.'},
    ],
  },
  resume: {
    education: '教育背景',
    work: '工作经验',
    skills: '专业技能',
    skillsDescription: '在这里展示你的技能概览，向雇主展示你的能力',
  },
  portfolio: {
    heading: '查看我的作品',
    items: [
      {title: '项目一', description: '在这里给出项目的简短描述。'},
      {title: '项目二', description: '在这里给出项目的简短描述。'},
      {title: '项目三', description: '在这里给出项目的简短描述。'},
      {title: '项目四', description: '在这里给出项目的简短描述。'},
      {title: '项目五', description: '在这里给出项目的简短描述。'},
      {title: '项目六', description: '在这里给出项目的简短描述。'},
      {title: '项目七', description: '在这里给出项目的简短描述。'},
      {title: '项目八', description: '在这里给出项目的简短描述。'},
      {title: '项目九', description: '在这里给出项目的简短描述。'},
      {title: '项目十', description: '在这里给出项目的简短描述。'},
      {title: '项目十一', description: '在这里给出项目的简短描述。'},
    ],
  },
  education: [
    {
      date: '2007年4月',
      location: '小丑学院',
      title: '啤酒品鉴硕士',
      content: '描述你在学校的经历，你学到了什么，获得了哪些有用的技能等。',
    },
    {
      date: '2003年3月',
      location: '商学院',
      title: '基础研究 101',
      content: '描述你在学校的经历，你学到了什么，获得了哪些有用的技能等。',
    },
  ],
  experience: [
    {
      date: '2010年3月 - 至今',
      location: '优秀开发公司',
      title: '高级 UX 工程师',
      content: '描述工作内容、特殊项目、杰出成就、使用的技术栈，以及任何对雇主有用的信息。',
    },
    {
      date: '2007年3月 - 2010年2月',
      location: '车库创业工作室',
      title: '初级 Bug 修复师',
      content: '描述工作内容、特殊项目、杰出成就、使用的技术栈，以及任何对雇主有用的信息。',
    },
  ],
  skills: [
    {name: '口语', skills: [{name: '英语'}, {name: '法语'}, {name: '西班牙语'}]},
    {name: '前端开发', skills: [{name: 'React'}, {name: 'Typescript'}, {name: 'GraphQL'}]},
    {name: '后端开发', skills: [{name: 'Node.js'}, {name: 'Rust'}, {name: 'Golang'}]},
    {name: '移动开发', skills: [{name: 'React Native'}, {name: 'Flutter'}, {name: 'Swift'}]},
  ],
  testimonials: {
    items: [
      {
        name: 'John Doe',
        text: '利用这个机会来推广与你合作的体验。高价值的推荐信包括来自现任或前任同事、经理或满意客户的内容。',
      },
      {
        name: 'Jane Doe',
        text: '在这里写下别人对你的好评。鼓励他们写得具体，包含重要细节（关于你们一起参与的项目、产出的高质量作品等）。',
      },
      {
        name: '某人',
        text: '添加多条推荐信，尽量保持新鲜，但一定要专注于突出你技能/职业素养的高质量推荐。',
      },
    ],
  },
  contact: {
    headerText: '联系我。',
    description: '这里是一个很好的位置，可以给读者留言，让他们知道如何最好地联系你。',
    items: [
      {text: 'reachout@timbaker.me'},
      {text: '维多利亚 BC，加拿大'},
      {text: '@tbakerx'},
      {text: 'tbakerx'},
    ],
    form: {
      namePlaceholder: '姓名',
      emailPlaceholder: '邮箱',
      messagePlaceholder: '留言',
      submitButton: '发送消息',
      ariaLabel: '提交联系表单',
    },
  },
  socials: {
    github: 'Github',
    stackOverflow: 'Stack Overflow',
    linkedIn: 'LinkedIn',
    instagram: 'Instagram',
    twitter: 'Twitter',
  },
  footer: {
    providedBy: (
      <>
        由 <span className="text-white">React</span>
        <span className="italic text-yellow">Resume</span> 提供支持
      </>
    ),
    copyright: '© {year} Tim Baker 版权所有',
  },
  ui: {
    menuButton: '菜单按钮',
    openSidebar: '打开侧边栏',
  },
};
