// 宝宝起名字库数据库 - 包含精选汉字，涵盖五行、笔画、寓意、适用性别等信息

const NAME_DATABASE = [
    // ===== 金属性字符 =====
    { char: '鑫', element: '金', meaning: '财富兴盛，三金聚财', strokes: 24, gender: ['male', 'both'] },
    { char: '钰', element: '金', meaning: '珍宝美玉，贵重珍贵', strokes: 13, gender: ['both'] },
    { char: '铭', element: '金', meaning: '铭记在心，永不忘怀', strokes: 14, gender: ['male'] },
    { char: '锐', element: '金', meaning: '锐意进取，勇往直前', strokes: 15, gender: ['male'] },
    { char: '钢', element: '金', meaning: '坚强刚毅，意志如钢', strokes: 16, gender: ['male'] },
    { char: '银', element: '金', meaning: '珍贵纯洁，如银般闪耀', strokes: 14, gender: ['both'] },
    { char: '锦', element: '金', meaning: '前程似锦，美好未来', strokes: 16, gender: ['both'] },
    { char: '睿', element: '金', meaning: '睿智深远，洞察秋毫', strokes: 14, gender: ['both'] },
    { char: '诚', element: '金', meaning: '诚实守信，真诚待人', strokes: 14, gender: ['both'] },
    { char: '成', element: '金', meaning: '功成名就，事业有成', strokes: 7, gender: ['both'] },
    { char: '承', element: '金', meaning: '承继传统，承担责任', strokes: 8, gender: ['both'] },
    { char: '春', element: '金', meaning: '春意盎然，生机勃勃', strokes: 9, gender: ['both'] },
    { char: '聪', element: '金', meaning: '聪明伶俐，智慧过人', strokes: 17, gender: ['both'] },
    { char: '宸', element: '金', meaning: '帝王宫殿，尊贵高雅', strokes: 10, gender: ['both'] },
    { char: '晨', element: '金', meaning: '晨光熹微，朝气蓬勃', strokes: 11, gender: ['both'] },
    { char: '善', element: '金', meaning: '善良仁慈，心地善良', strokes: 12, gender: ['both'] },
    { char: '正', element: '金', meaning: '正直无私，堂堂正正', strokes: 5, gender: ['both'] },
    { char: '信', element: '金', meaning: '诚实守信，言而有信', strokes: 9, gender: ['both'] },
    { char: '真', element: '金', meaning: '真诚善良，真心实意', strokes: 10, gender: ['both'] },
    { char: '思', element: '金', meaning: '思维敏捷，深思熟虑', strokes: 9, gender: ['both'] },
    { char: '钊', element: '金', meaning: '勉励激励，奋发向上', strokes: 10, gender: ['male'] },
    { char: '钦', element: '金', meaning: '钦佩敬重，德高望重', strokes: 12, gender: ['male'] },
    { char: '铿', element: '金', meaning: '铿锵有力，声音洪亮', strokes: 15, gender: ['male'] },
    { char: '锋', element: '金', meaning: '锋芒毕露，才华出众', strokes: 15, gender: ['male'] },
    { char: '钟', element: '金', meaning: '专一专注，钟情不渝', strokes: 17, gender: ['both'] },
    { char: '铁', element: '金', meaning: '坚强不屈，铁骨铮铮', strokes: 21, gender: ['male'] },
    { char: '镇', element: '金', meaning: '镇定自若，稳重大方', strokes: 18, gender: ['male'] },
    { char: '刚', element: '金', meaning: '刚强有力，刚正不阿', strokes: 10, gender: ['male'] },
    { char: '新', element: '金', meaning: '新颖独特，推陈出新', strokes: 13, gender: ['both'] },
    { char: '心', element: '金', meaning: '善良纯真，用心良苦', strokes: 4, gender: ['both'] },

    // ===== 木属性字符 =====
    { char: '林', element: '木', meaning: '茂林修竹，生机盎然', strokes: 8, gender: ['both'] },
    { char: '森', element: '木', meaning: '森森不息，蓬勃发展', strokes: 12, gender: ['male'] },
    { char: '楠', element: '木', meaning: '楠木珍贵，品质优良', strokes: 13, gender: ['both'] },
    { char: '柏', element: '木', meaning: '坚贞不渝，长青不老', strokes: 10, gender: ['male'] },
    { char: '桂', element: '木', meaning: '蟾宫折桂，功成名就', strokes: 10, gender: ['both'] },
    { char: '梓', element: '木', meaning: '梓材良木，成才之材', strokes: 11, gender: ['both'] },
    { char: '松', element: '木', meaning: '松柏长青，坚韧不拔', strokes: 8, gender: ['male'] },
    { char: '柯', element: '木', meaning: '法度准则，品行端正', strokes: 9, gender: ['male'] },
    { char: '杰', element: '木', meaning: '杰出人才，超群出众', strokes: 12, gender: ['male'] },
    { char: '梦', element: '木', meaning: '梦想成真，理想远大', strokes: 14, gender: ['both'] },
    { char: '枫', element: '木', meaning: '枫叶如丹，美丽动人', strokes: 13, gender: ['both'] },
    { char: '桃', element: '木', meaning: '桃花运旺，美好姻缘', strokes: 10, gender: ['female'] },
    { char: '李', element: '木', meaning: '桃李满天下，德高望重', strokes: 7, gender: ['both'] },
    { char: '杨', element: '木', meaning: '杨柳依依，温柔多情', strokes: 13, gender: ['both'] },
    { char: '樱', element: '木', meaning: '樱花绚烂，美丽纯洁', strokes: 21, gender: ['female'] },
    { char: '义', element: '木', meaning: '义薄云天，正义凛然', strokes: 4, gender: ['male'] },
    { char: '艺', element: '木', meaning: '多才多艺，才华横溢', strokes: 4, gender: ['both'] },
    { char: '英', element: '木', meaning: '英雄豪杰，才华出众', strokes: 11, gender: ['both'] },
    { char: '颖', element: '木', meaning: '聪颖过人，才思敏捷', strokes: 16, gender: ['female'] },
    { char: '毅', element: '木', meaning: '坚毅不屈，意志坚强', strokes: 15, gender: ['male'] },
    { char: '雅', element: '木', meaning: '高雅脱俗，品味不凡', strokes: 12, gender: ['female'] },
    { char: '彦', element: '木', meaning: '才德兼备，德才并茂', strokes: 9, gender: ['male'] },
    { char: '言', element: '木', meaning: '言出必行，诚实可信', strokes: 7, gender: ['both'] },
    { char: '业', element: '木', meaning: '事业有成，业绩斐然', strokes: 13, gender: ['both'] },
    { char: '叶', element: '木', meaning: '叶茂根深，蓬勃发展', strokes: 15, gender: ['both'] },
    { char: '琪', element: '木', meaning: '美玉珍贵，琪花瑶草', strokes: 13, gender: ['female'] },
    { char: '琳', element: '木', meaning: '琳琅满目，美玉如琳', strokes: 13, gender: ['female'] },
    { char: '强', element: '木', meaning: '强大有力，坚强不屈', strokes: 12, gender: ['male'] },
    { char: '健', element: '木', meaning: '健康强壮，健步如飞', strokes: 11, gender: ['male'] },
    { char: '贤', element: '木', meaning: '贤良淑德，德才兼备', strokes: 15, gender: ['both'] },
    { char: '花', element: '木', meaning: '花开富贵，花好月圆', strokes: 8, gender: ['female'] },
    { char: '草', element: '木', meaning: '草木繁茂，生机盎然', strokes: 12, gender: ['both'] },
    { char: '树', element: '木', meaning: '树大根深，百年树人', strokes: 16, gender: ['both'] },
    { char: '竹', element: '木', meaning: '竹报平安，节节高升', strokes: 6, gender: ['both'] },
    { char: '荷', element: '木', meaning: '荷花出淤泥而不染', strokes: 13, gender: ['female'] },
    { char: '菊', element: '木', meaning: '菊花傲霜，品格高洁', strokes: 14, gender: ['female'] },
    { char: '梅', element: '木', meaning: '梅花香自苦寒来', strokes: 11, gender: ['female'] },
    { char: '兰', element: '木', meaning: '兰花幽香，品质高雅', strokes: 9, gender: ['female'] },
    { char: '萱', element: '木', meaning: '萱草忘忧，快乐无忧', strokes: 15, gender: ['female'] },
    { char: '芝', element: '木', meaning: '灵芝仙草，珍贵难得', strokes: 10, gender: ['female'] }
];

// 由于篇幅限制，这里只包含了约80个精选字符
// 在实际应用中，可以根据需要继续扩展字库内容
// 包括更多五行属性的字、不同类别的字（如方位、季节、动物等）

// 导出字库数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NAME_DATABASE;
} 