/**
 * 工具函数库 - uniapp 版本
 * 遵循 KISS 原则：每个函数只做一件事，保持简洁
 */

/**
 * 格式化金额 - 添加千分位分隔符
 * @param {number} num 金额数字
 * @param {number} decimals 小数位数，默认2位
 * @returns {string} 格式化后的金额字符串
 */
export function formatMoney(num, decimals = 2) {
  if (typeof num !== 'number' || isNaN(num)) {
    return '0.00';
  }

  const fixed = num.toFixed(decimals);
  const parts = fixed.split('.');
  const integer = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const decimal = parts[1] || '00';

  return `${integer}.${decimal}`;
}

/**
 * 手机号脱敏处理
 * @param {string} phone 手机号
 * @returns {string} 脱敏后的手机号
 */
export function desensitizePhone(phone) {
  if (!phone || phone.length !== 11) return phone;
  return phone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
}

/**
 * 日期格式化
 * @param {Date|string} date 日期对象或日期字符串
 * @param {string} format 格式化模板，如 'YYYY-MM-DD HH:mm:ss'
 * @returns {string} 格式化后的日期字符串
 */
export function formatDate(date, format = 'YYYY-MM-DD') {
  const d = typeof date === 'string' ? new Date(date) : date;

  if (!(d instanceof Date) || isNaN(d.getTime())) {
    return '';
  }

  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  const hours = d.getHours().toString().padStart(2, '0');
  const minutes = d.getMinutes().toString().padStart(2, '0');
  const seconds = d.getSeconds().toString().padStart(2, '0');

  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

/**
 * 生成UUID
 * @returns {string} UUID字符串
 */
export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * 防抖函数
 * @param {Function} func 要执行的函数
 * @param {number} delay 延迟时间（毫秒）
 * @returns {Function} 防抖后的函数
 */
export function debounce(func, delay = 300) {
  let timer = null;

  return function(...args) {
    const context = this;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func.apply(context, args);
      timer = null;
    }, delay);
  };
}

/**
 * 节流函数
 * @param {Function} func 要执行的函数
 * @param {number} delay 间隔时间（毫秒）
 * @returns {Function} 节流后的函数
 */
export function throttle(func, delay = 300) {
  let lastTime = 0;

  return function(...args) {
    const context = this;
    const now = Date.now();

    if (now - lastTime >= delay) {
      func.apply(context, args);
      lastTime = now;
    }
  };
}

/**
 * 验证手机号格式
 * @param {string} phone 手机号
 * @returns {boolean} 是否合法
 */
export function validatePhone(phone) {
  return /^1[3-9]\d{9}$/.test(phone);
}

/**
 * 验证邮箱格式
 * @param {string} email 邮箱
 * @returns {boolean} 是否合法
 */
export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * 验证身份证号
 * @param {string} idCard 身份证号
 * @returns {boolean} 是否合法
 */
export function validateIdCard(idCard) {
  if (!idCard || idCard.length !== 18) return false;

  // 简单验证：18位，最后一位是数字或X
  return /^\d{17}[\dXx]$/.test(idCard);
}

/**
 * 深度克隆对象
 * @param {Object} obj 要克隆的对象
 * @returns {Object} 克隆后的对象
 */
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(item => deepClone(item));

  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }

  return cloned;
}

/**
 * 生成随机颜色（用于头像占位）
 * @returns {string} 颜色值
 */
export function generateRandomColor() {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
  return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * 计算两个日期之间的天数差
 * @param {Date|string} start 开始日期
 * @param {Date|string} end 结束日期
 * @returns {number} 天数差
 */
export function dateDiff(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const diff = endDate.getTime() - startDate.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

/**
 * 格式化数字（缩写形式）
 * @param {number} num 数字
 * @returns {string} 格式化后的字符串
 */
export function formatNumberAbbreviation(num) {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(1) + '亿';
  } else if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + '千';
  }
  return num.toString();
}
