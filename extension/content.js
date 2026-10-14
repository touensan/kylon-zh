(() => {
  'use strict';

  const isDocs = globalThis.location?.hostname === 'docs.kylon.io';
  const normalize = value => value.trim().replace(/\s+/g, ' ');
  const phrases = typeof module !== 'undefined' && module.exports ? require('./phrases.js') : globalThis.KYLON_ZH_PHRASES || [];
  const docsPhrases = isDocs ? (typeof module !== 'undefined' && module.exports ? require('./docs-phrases.js') : globalThis.KYLON_DOCS_ZH_PHRASES || []) : [];
  const dictionary = new Map([...phrases.map(([english, chinese]) => [normalize(english), chinese]), ...Object.entries({
    'Settings': '设置',
    'Account': '账户',
    'Edit profile': '编辑个人资料',
    'Region': '地区',
    'Sets regional defaults for your account, in every workspace.': '设置账户在所有工作空间中的默认地区。',
    'Japan': '日本',
    'Timezone': '时区',
    'Controls how dates and times are shown for your account, in every workspace.': '设置账户在所有工作空间中的日期与时间显示方式。',
    'Language': '语言',
    'Sets the language Kylon uses for your account, in every workspace.': '设置账户在所有工作空间中的界面语言。',
    'Auto (English)': '自动（英语）',
    'English': '英语',
    'Agents': '智能体',
    'Edit agent profile': '编辑智能体资料',
    'Other agents': '其他智能体',
    'View, edit, and create other workspace agents.': '查看、编辑和创建工作空间中的其他智能体。',
    'Workspace': '工作空间',
    'Edit workspace info': '编辑工作空间信息',
    'Edit info': '编辑信息',
    'Plan': '套餐',
    'Free': '免费',
    'Workspace Knowledge': '工作空间知识库',
    'Shared library that you, your teammates, and the workspace agents all read from.': '供你、团队成员和工作空间智能体共同使用的知识库。',
    'Billing and usage': '账单与用量',
    'View workspace credit usage, plans, and payment settings.': '查看工作空间积分用量、套餐与付款设置。',
    'Invite and earn': '邀请奖励',
    'You earn 50 credits when invited workspaces activate.': '受邀工作空间激活后，你将获得 50 积分。',
    'Preferences': '偏好设置',
    'Theme': '主题',
    'Choose how Kylon looks. Applies to this browser only.': '选择 Kylon 的外观，仅在此浏览器中生效。',
    'Light': '浅色',
    'Dark': '深色',
    'System': '跟随系统',
    'Enable notifications': '启用通知',
    'Get notified about mentions and related messages when the tab is not focused. Applies to this browser only.': '标签页不在前台时，接收提及与相关消息通知，仅在此浏览器中生效。',
    'Notifications on this browser': '此浏览器的通知',
    'Developer tools': '开发者工具',
    'Install the Kylon CLI and authorize it for this workspace.': '安装 Kylon CLI，并授权其访问此工作空间。',
    'Legal': '法律信息',
    'Privacy': '隐私政策',
    'Read how Kylon collects, uses, and protects your data.': '了解 Kylon 如何收集、使用和保护你的数据。',
    'Danger zone': '危险操作',
    'Transfer workspace ownership': '转移工作空间所有权',
    'Promote another human member to admin before transferring ownership.': '转移所有权前，请先将另一名团队成员设为管理员。',
    'Transfer ownership': '转移所有权',
    'Request workspace deletion': '申请删除工作空间',
    'Workspace deletion is handled by support. Permanently deleting this workspace removes all of its data and cannot be undone.': '工作空间删除由客服处理。永久删除将清除其中所有数据，且无法撤销。',
    'Email support to request deletion': '发送邮件申请删除',
    'Start new work': '开始新任务',
    'Find': '搜索',
    'Chat': '聊天',
    'Members': '成员',
    'Demo request': '申请演示',
    'Connections': '连接',
    'Open workspace switcher': '切换工作空间',
    'Open user menu': '打开用户菜单',
    'Back to chat': '返回聊天',
    'New': '新建',
    'Filter Chat': '筛选聊天',
    'Home': '首页',
    'Recent': '最近',
    'Unread': '未读',
    'No participating threads yet.': '你尚未参与任何话题。',
    'Private room — only invited members can access.': '私密聊天室，仅受邀成员可访问。',
    'What should we work on?': '我们开始做什么？',
    'Write a message': '输入消息',
    'Message...': '输入消息…',
    'Add to message': '添加到消息',
    'Auto select room': '自动选择聊天室',
    'Voice input': '语音输入',
    'Send message': '发送消息',
    'Get the app': '获取应用',
    'Feedback': '反馈',
    'Sign out': '退出登录',
    'Profile': '个人资料',
    'Name': '名称',
    'Display name': '显示名称',
    'Email': '邮箱',
    'Save': '保存',
    'Save changes': '保存更改',
    'Cancel': '取消',
    'Close': '关闭',
    'Back': '返回',
    'Continue': '继续',
    'Done': '完成',
    'Delete': '删除',
    'Remove': '移除',
    'Edit': '编辑',
    'Rename': '重命名',
    'Copy': '复制',
    'Copied': '已复制',
    'Search': '搜索',
    'Search...': '搜索…',
    'Search members': '搜索成员',
    'Search agents': '搜索智能体',
    'No results found.': '未找到结果。',
    'Loading...': '加载中…',
    'More actions': '更多操作',
    'Create': '创建',
    'Create workspace': '创建工作空间',
    'New workspace': '新建工作空间',
    'Invite members': '邀请成员',
    'Invite': '邀请',
    'Admin': '管理员',
    'Member': '成员',
    'Owner': '所有者',
    'Human': '团队成员',
    'Agent': '智能体',
    'Intelligence': '智能水平',
    'Head of Agents': '智能体主管',
    'About this Intelligence level': '关于此智能水平',
    'Description': '描述',
    'Instructions': '指令',
    'Knowledge': '知识库',
    'Files': '文件',
    'Upload': '上传',
    'Upload files': '上传文件',
    'Connect': '连接',
    'Disconnect': '断开连接',
    'Connected': '已连接',
    'Not connected': '未连接',
    'Manage': '管理',
    'General': '常规',
    'Notifications': '通知',
    'Help': '帮助',
    'Learn more': '了解更多',
    'Upgrade': '升级',
    'Usage': '用量',
    'Credits': '积分',
    'Monthly': '按月',
    'Yearly': '按年',
    'Download': '下载',
    'Open': '打开',
    'Retry': '重试',
    'Try again': '重试',
    'Something went wrong': '出了点问题',
    'Attach files': '添加附件',
    'New room': '新建聊天室',
    'Create room': '创建聊天室',
    'New thread': '新建话题',
    'Reply': '回复',
    'Reply in thread': '在话题中回复',
    'Mark as read': '标为已读',
    'Mark as unread': '标为未读',
    'Public': '公开',
    'Private': '私密',
    'Invite member or create agent': '邀请成员或创建智能体',
    'Filter members': '筛选成员',
    'All members': '所有成员',
    'User members': '团队成员',
    'Agent members': '智能体成员',
    'Agent can access external services through your connections.': '智能体可以通过你的连接访问外部服务。',
    'Search connections': '搜索连接',
    'Recommended': '推荐',
    'Email & Calendar': '邮件与日历',
    'Projects & Code': '项目与代码',
    'Marketing & Growth': '营销与增长',
    'Business Ops': '业务运营',
    'LINE Official Account': 'LINE 官方账号',
    'MCP Server': 'MCP 服务器',
    'Custom API Service': '自定义 API 服务',
    'Add a custom API service': '添加自定义 API 服务',
    'Add a service that isn\'t in the list with the API keys it gave you.': '使用服务提供的 API 密钥添加列表以外的服务。',
    'Let agents search and read email, and draft or send messages.': '允许智能体搜索与读取邮件，以及起草或发送邮件。',
    'Let agents read supported calendars, find availability, and create or update events.': '允许智能体读取支持的日历、查询空闲时间，以及创建或更新日程。',
    'Let agents search and read repositories, issues, and pull requests, and make supported code or project updates.': '允许智能体搜索与读取仓库、议题和拉取请求，并进行支持的代码或项目更新。',
    'Let agents search and read workspace content, and create or update supported pages and databases.': '允许智能体搜索与读取工作空间内容，以及创建或更新支持的页面与数据库。',
    'Let agents search and read files, and create or update supported files and folders.': '允许智能体搜索与读取文件，以及创建或更新支持的文件与文件夹。',
    'Let agents search channels and messages, read conversation context, and send messages.': '允许智能体搜索频道与消息、读取对话上下文，以及发送消息。',
    'Let agents receive new messages from a LINE Official Account and work with them in a LINE Inbox.': '允许智能体接收 LINE 官方账号的新消息，并在 LINE 收件箱中处理。',
    'Let agents use the tools exposed by an MCP server you choose.': '允许智能体使用你选择的 MCP 服务器提供的工具。',
    'Let agents search and read issues, projects, and teams, and create or update supported work items.': '允许智能体搜索与读取议题、项目和团队，以及创建或更新支持的工作事项。',
    'Let agents search meeting reports, transcripts, and action items.': '允许智能体搜索会议报告、文字记录和待办事项。',
    'Let agents read sessions, notes, and files, and search your memory.': '允许智能体读取会话、笔记与文件，并搜索你的记忆。',
    'Let agents search and retrieve recordings, transcripts, and summaries.': '允许智能体搜索与获取录音、文字记录和摘要。',
    'Let agents search and read email, draft or send messages, and work with supported calendar data.': '允许智能体搜索与读取邮件、起草或发送邮件，以及处理支持的日历数据。',
    'Let agents read spreadsheet data and create or update supported spreadsheets.': '允许智能体读取电子表格数据，以及创建或更新支持的电子表格。',
    'Search workspace resources.': '搜索工作空间资源。',
    'Search query': '搜索内容',
    'Searching...': '搜索中…',
    'Apps': '应用',
    'Automations': '自动化',
    'Room menu': '聊天室菜单',
    'Fast': '快速（Fast）',
    'Pro': '专业（Pro）',
    'Max': '最强（Max）',
    'Fastest. Best for editing, summaries, and straightforward everyday work.': '速度最快，适合文字编辑、总结和直接的日常任务。',
    'Handles most everyday work with a balanced mix of capability, speed, and cost.': '可以胜任大部分日常任务，在能力、速度和成本之间更均衡。',
    'Cost: 1/10 of Max.': '成本：最强（Max）的 1/10。',
    'Cost: 1/2 of Max.': '成本：最强（Max）的 1/2。',
    'View all 1 unread item…': '查看全部 1 个未读事项…',
    '1 unread message': '1 条未读消息',
    'campaign': '活动',
    'gift': '赠送',
    'pack': '额度包',
    'monthly': '月度',
    'engagement': '活跃奖励',
    'referral': '邀请奖励',
    'Grant': '发放',
    'INTELLIGENCE': '智能水平'
  }), ...docsPhrases]);
  const translatedValues = new Set([...dictionary.values()].filter(value => /[\u3400-\u9fff]/.test(value)).map(normalize));

  const templates = new Map();
  for (const [english, chinese] of dictionary) {
    if (!english.includes('{{') || /<\/?[a-z]/i.test(english)) continue;
    const parts = english.split(/(\{\{[^{}]+\}\})/g);
    const literalLength = parts.filter(part => !part.startsWith('{{')).join('').replace(/\s/g, '').length;
    // ponytail: 不匹配纯变量或纯标点模板，避免将未知名字、用户文本当成界面词条。
    if (literalLength < 4 || !/[a-z]{2}/i.test(parts.filter(part => !part.startsWith('{{')).join(''))) continue;
    const names = [];
    const pattern = parts.map(part => {
      if (part.startsWith('{{')) { names.push(part.slice(2, -2)); return '(.+?)'; }
      return part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }).join('');
    const prefix = english.match(/^[A-Za-z]+/)?.[0] || '*';
    if (!templates.has(prefix)) templates.set(prefix, []);
    templates.get(prefix).push({ regex: new RegExp(`^${pattern}$`), names, chinese, literalLength });
  }
  for (const group of templates.values()) group.sort((a, b) => b.literalLength - a.literalLength);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function translateDate(text) {
    const match = text.match(/^([A-Z][a-z]{2}) (\d{1,2})(?:, (\d{4}))?$/);
    if (!match || !months.includes(match[1])) return text;
    const month = months.indexOf(match[1]);
    const day = Number(match[2]);
    const year = match[3] ? Number(match[3]) : 2000;
    const date = new Date(Date.UTC(year, month, day));
    if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month || date.getUTCDate() !== day) return text;
    return new Intl.DateTimeFormat('zh-CN', { timeZone: 'UTC', year: match[3] ? 'numeric' : undefined, month: 'short', day: 'numeric' }).format(date);
  }

  function translate(value) {
    const key = normalize(value);
    if (translatedValues.has(key)) return value;
    let result = dictionary.get(key);
    // ponytail: 长文只做精确查询；插值上限 1024 字符，避免在外部大段文本上运行回溯正则。
    if (!result && key.length > 1024) return value;
    if (!result && isDocs) {
      const pagination = key.match(/^(前へ|次へ|Previous|Next)(?::|：)?\s+(.+)$/);
      if (pagination) result = `${['前へ', 'Previous'].includes(pagination[1]) ? '上一页' : '下一页'}：${dictionary.get(pagination[2]) || pagination[2]}`;
    }
    if (!result) {
      const edit = key.match(/^Edit (.+)'s agent profile$/);
      const work = key.match(/^Start new work in (.+)$/);
      const actions = key.match(/^(.+): More actions$/);
      const collapse = key.match(/^(Collapse|Expand) (.+)$/);
      const room = key.match(/^Send to room: (.+)$/);
      const intelligence = key.match(/^Head of Agents · Intelligence: (.+)$/);
      const connect = key.match(/^Connect (.+)$/);
      const available = key.match(/^([\d,]+\+?) available$/);
      const members = key.match(/^Room members: (\d+)$/);
      if (edit) result = `编辑 ${edit[1]} 的智能体资料`;
      else if (work) result = `在 ${work[1]} 中开始新任务`;
      else if (actions) result = `${actions[1]}：更多操作`;
      else if (collapse) result = `${collapse[1] === 'Collapse' ? '收起' : '展开'} ${collapse[2]}`;
      else if (room) result = `发送到聊天室：${dictionary.get(room[1]) || room[1]}`;
      else if (intelligence) result = `智能体主管 · 智能水平：${dictionary.get(intelligence[1]) || intelligence[1]}`;
      else if (connect) result = `连接 ${dictionary.get(connect[1]) || connect[1]}`;
      else if (available) result = `${available[1]} 个可用服务`;
      else if (members) result = `聊天室成员：${members[1]} 人`;
    }
    if (!result) {
      const prefix = key.match(/^[A-Za-z]+/)?.[0] || '*';
      for (const template of [...(templates.get(prefix) || []), ...(prefix === '*' ? [] : templates.get('*') || [])]) {
        const match = key.match(template.regex);
        if (!match) continue;
        const captures = new Map();
        let valid = true;
        template.names.forEach((name, index) => {
          const captured = match[index + 1];
          if (captures.has(name) && captures.get(name) !== captured) valid = false;
          captures.set(name, captured);
        });
        if (!valid) continue;
        result = template.chinese.replace(/\{\{([^{}]+)\}\}/g, (token, name) => {
          const captured = captures.get(name);
          return name === 'level' ? dictionary.get(captured) || captured : captured;
        });
        break;
      }
    }
    if (!result) {
      const dates = key.split(' - ');
      if (dates.length === 2 && dates.every(date => translateDate(date) !== date)) result = dates.map(translateDate).join(' - ');
      else if (translateDate(key) !== key) result = translateDate(key);
    }
    // 使用回调，确保动态名称中的 $&、$1 等字符按原样显示。
    return result ? value.replace(/\S[\s\S]*?(?=\s*$)/, () => result) : value;
  }

  // ponytail: Node 直接复用实际翻译逻辑做自检，无需测试框架或另一份词典。
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translate, dictionary };
    return;
  }
  if (!['app.kylon.io', 'docs.kylon.io'].includes(location.hostname) || document.documentElement.hasAttribute('data-kylon-zh-installed')) return;
  document.documentElement.setAttribute('data-kylon-zh-installed', '1.2.1');

  const storageKey = 'kylonSimplifiedChinese';
  const textChanges = new Map();
  const attributeChanges = new Map();
  const pending = new Set([document.body]);
  const attributes = ['title', 'aria-label', 'placeholder', 'aria-placeholder', 'data-placeholder'];
  if (isDocs) attributes.push('alt');
  // 文档正文是本次明确请求翻译的公开内容；应用中的消息和用户正文仍保持保护。
  const protectedContent = isDocs ? 'pre, code, .font-mono, [data-language], [data-user-content]'
    : 'pre, code, .prose, [data-testid*="message-content"], [data-testid*="message-body"], [data-user-content]';
  const messageRoot = '[id^="msg-"], [data-message-id]';
  const messageControl = 'button, [role="button"], [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="tooltip"]';
  const skip = `script, style, noscript, textarea, input, [contenteditable]:not([contenteditable="false"]), [translate="no"], .ProseMirror, [data-kylon-zh-option], ${protectedContent}`;
  let enabled = true;
  let scheduled = false;

  function setText(node, value) {
    if (node.data === value) return;
    const saved = textChanges.get(node);
    textChanges.set(node, { original: saved && node.data === saved.applied ? saved.original : node.data, applied: value });
    node.data = value;
  }

  function setAttribute(element, name, value) {
    const current = element.getAttribute(name);
    if (current === value) return;
    let changes = attributeChanges.get(element);
    if (!changes) attributeChanges.set(element, changes = new Map());
    const saved = changes.get(name);
    changes.set(name, { original: saved && current === saved.applied ? saved.original : current, applied: value });
    if (value === null) element.removeAttribute(name);
    else element.setAttribute(name, value);
  }

  function translateTree(root) {
    if (!root?.isConnected) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let node = root;
    do {
      if (node.nodeType === Node.TEXT_NODE) {
        const parent = node.parentElement;
        if (!parent || parent.closest(skip)) continue;
        // 消息正文继续保护；其中明确的原生按钮、菜单和提示可以翻译。
        if (parent.closest(messageRoot) && !parent.closest(messageControl)) continue;
        // 保留聊天室名称，即使名称恰巧与某个界面词条相同。
        if (parent.closest('[data-testid="chat-rooms-list"] button[aria-expanded]')) continue;
        if (textChanges.get(node)?.applied === node.data) continue;
        setText(node, translate(node.data));
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // 编辑器只翻译提示和无障碍标签，从不写入其正文或 input.value。
        if (node.closest(protectedContent)) continue;
        if (node.closest(messageRoot) && !node.closest(messageControl)) continue;
        for (const attribute of attributes) {
          const value = node.getAttribute(attribute);
          if (value) setAttribute(node, attribute, translate(value));
        }
      }
    } while ((node = walker.nextNode()));
  }

  function restore() {
    for (const [node, saved] of textChanges) {
      if (node.isConnected && node.data === saved.applied) node.data = saved.original;
    }
    for (const [element, changes] of attributeChanges) {
      if (!element.isConnected) continue;
      for (const [name, saved] of changes) {
        if (element.getAttribute(name) !== saved.applied) continue;
        if (saved.original === null) element.removeAttribute(name);
        else element.setAttribute(name, saved.original);
      }
    }
    textChanges.clear();
    attributeChanges.clear();
  }

  function languageTrigger() {
    if (isDocs) {
      const triggers = [...document.querySelectorAll('#localization-select-trigger')];
      return triggers.find(trigger => trigger.getAttribute('aria-expanded') === 'true')
        || triggers.find(trigger => trigger.getClientRects().length) || triggers[0] || null;
    }
    // ponytail: 依据实测的语言图标定位该行；网站改版时更新此定位，不猜测其他下拉框。
    let row = document.querySelector('svg.lucide-languages')?.parentElement;
    while (row && row !== document.body) {
      const trigger = row.querySelector('button[role="combobox"]');
      if (trigger) return trigger;
      row = row.parentElement;
    }
    return null;
  }

  function languageMenu() {
    const trigger = languageTrigger();
    return trigger?.getAttribute('aria-expanded') === 'true'
      ? document.getElementById(isDocs ? 'localization-select-content' : trigger.getAttribute('aria-controls')) : null;
  }

  function syncLanguage() {
    const trigger = languageTrigger();
    if (!trigger) return;
    const triggers = isDocs ? document.querySelectorAll('#localization-select-trigger') : [trigger];
    for (const item of triggers) {
      const label = item.querySelector('span');
      if (enabled && label?.firstChild?.nodeType === Node.TEXT_NODE) setText(label.firstChild, '简体中文');
    }
    if (isDocs && enabled) {
      const title = document.querySelector('title')?.firstChild;
      if (title?.nodeType === Node.TEXT_NODE) setText(title, translate(title.data));
    }
    const menu = languageMenu();
    if (!menu || menu.getAttribute('role') !== (isDocs ? 'menu' : 'listbox')) return;
    const nativeRole = isDocs ? 'menuitem' : 'option';
    let option = menu.querySelector('[data-kylon-zh-option]');
    if (!option) {
      option = document.createElement('div');
      option.className = menu.querySelector(`[role="${nativeRole}"]`)?.className || '';
      option.setAttribute('role', isDocs ? 'menuitemradio' : 'option');
      option.setAttribute('data-kylon-zh-option', '');
      option.setAttribute('aria-label', '简体中文');
      option.id = 'kylon-zh-language-option';
      option.tabIndex = 0;
      option.style.cursor = 'pointer';
      option.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        void chooseChinese();
      });
      option.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          event.stopPropagation();
          void chooseChinese();
        }
      });
      menu.append(option);
    }
    option.setAttribute(isDocs ? 'aria-checked' : 'aria-selected', String(enabled));
    option.toggleAttribute('data-selected', enabled);
    const optionText = enabled ? '简体中文　✓' : '简体中文';
    if (option.textContent !== optionText) option.textContent = optionText;
    if (enabled) {
      for (const nativeOption of menu.querySelectorAll(`[role="${nativeRole}"]:not([data-kylon-zh-option])`)) {
        setAttribute(nativeOption, 'aria-selected', 'false');
        setAttribute(nativeOption, 'data-selected', isDocs ? 'false' : null);
        const indicator = nativeOption.querySelector(isDocs ? 'svg[aria-hidden="true"]' : '[data-slot="combobox-item-indicator"]');
        if (indicator) setAttribute(indicator, 'hidden', '');
      }
    }
  }

  function flush() {
    scheduled = false;
    observer.disconnect();
    try {
      if (enabled) {
        for (const root of pending) translateTree(root);
        setAttribute(document.documentElement, 'lang', 'zh-CN');
      }
      pending.clear();
      for (const node of textChanges.keys()) if (!node.isConnected) textChanges.delete(node);
      for (const element of attributeChanges.keys()) if (!element.isConnected) attributeChanges.delete(element);
      syncLanguage();
    } finally {
      observer.observe(document.body, {
        childList: true, characterData: true, subtree: true, attributes: true,
        attributeFilter: [...attributes, 'aria-expanded', 'aria-controls', 'aria-selected']
      });
    }
  }

  function schedule(root) {
    if (root) pending.add(root);
    if (!scheduled) {
      scheduled = true;
      queueMicrotask(flush);
    }
  }

  function setEnabled(value) {
    observer.disconnect();
    enabled = value;
    restore();
    pending.add(document.body);
    flush();
  }

  async function save(value) {
    if (!globalThis.chrome?.storage?.local) return;
    try {
      await chrome.storage.local.set({ [storageKey]: value });
    } catch (error) {
      console.warn('[Kylon 简体中文] 语言偏好保存失败，当前页面仍可使用。', error);
    }
  }

  async function chooseChinese() {
    setEnabled(true);
    const trigger = languageTrigger();
    trigger?.click();
    trigger?.focus();
    await save(true);
  }

  const observer = new MutationObserver(records => {
    // ponytail: 用微任务合并同轮 DOM 更新，避免后台标签页定时器节流和弹窗英文闪现；大规模改版时优先接入官方 i18n。
    for (const record of records) {
      if (record.type === 'childList') {
        for (const node of record.addedNodes) schedule(node);
        schedule(); // 菜单关闭或切页时也清理已脱离的旧节点。
      } else schedule(record.target);
    }
  });

  document.addEventListener('click', event => {
    const option = event.target.closest?.('[role="option"], [role="menuitem"], [role="menuitemradio"]');
    if (!option || option.hasAttribute('data-kylon-zh-option') || option.closest('[role="listbox"], [role="menu"]') !== languageMenu()) return;
    setEnabled(false);
    void save(false);
  }, true);

  document.addEventListener('keydown', event => {
    const menu = languageMenu();
    if (!menu) return;
    if (!menu.contains(event.target) && event.target !== languageTrigger()) return;
    const option = menu.querySelector('[data-kylon-zh-option]');
    const activeId = menu.getAttribute('aria-activedescendant') || document.activeElement?.id;
    const nativeOptions = [...menu.querySelectorAll(`[role="${isDocs ? 'menuitem' : 'option'}"]:not([data-kylon-zh-option])`)];
    if (event.key === 'End' || (event.key === 'ArrowDown' && activeId === nativeOptions.at(-1)?.id)) {
      event.preventDefault();
      event.stopImmediatePropagation();
      option?.focus();
    } else if (['Enter', ' '].includes(event.key) && document.activeElement !== option) {
      // 键盘选中原生语言与鼠标点击一样关闭中文，随后由网站处理原生语言切换。
      setEnabled(false);
      void save(false);
    }
  }, true);

  const style = document.createElement('style');
  style.textContent = '[data-kylon-zh-option]:hover{background:var(--color-accent,rgba(128,128,128,.12))}[data-kylon-zh-option]:focus-visible{outline:2px solid currentColor;outline-offset:-2px}';
  document.head.append(style);

  async function start() {
    if (globalThis.chrome?.storage?.local) {
      try {
        const preferences = await chrome.storage.local.get(storageKey);
        enabled = preferences[storageKey] !== false;
      } catch (error) {
        console.warn('[Kylon 简体中文] 读取语言偏好失败，默认启用中文。', error);
      }
      chrome.storage.onChanged.addListener((changes, area) => {
        if (area === 'local' && changes[storageKey]) setEnabled(changes[storageKey].newValue !== false);
      });
    }
    flush();
  }
  void start();
})();
