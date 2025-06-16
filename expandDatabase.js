// 字库扩展脚本 - 用于动态添加更多字符到NAME_DATABASE

// 添加更多字符的函数
function expandNameDatabase() {
    if (typeof NAME_DATABASE === 'undefined') {
        console.error('NAME_DATABASE not found!');
        return;
    }

    // 更多水属性字符
    const waterChars = [
        { char: '海', element: '水', meaning: '海纳百川，胸襟广阔', strokes: 11, gender: ['male'] },
        { char: '江', element: '水', meaning: '江山如画，胸怀壮志', strokes: 7, gender: ['male'] },
        { char: '涛', element: '水', meaning: '波涛壮阔，气势磅礴', strokes: 18, gender: ['male'] },
        { char: '润', element: '水', meaning: '润泽万物，恩泽深厚', strokes: 16, gender: ['both'] },
        { char: '泽', element: '水', meaning: '恩泽深厚，福泽绵长', strokes: 17, gender: ['both'] },
        { char: '清', element: '水', meaning: '清正廉明，品格高洁', strokes: 12, gender: ['both'] },
        { char: '淼', element: '水', meaning: '水势浩大，波澜壮阔', strokes: 12, gender: ['both'] },
        { char: '溪', element: '水', meaning: '溪水潺潺，清雅动人', strokes: 14, gender: ['both'] },
        { char: '湖', element: '水', meaning: '湖光山色，宁静致远', strokes: 13, gender: ['both'] },
        { char: '河', element: '水', meaning: '河流不息，奔流不止', strokes: 9, gender: ['both'] },
        { char: '洋', element: '水', meaning: '洋洋大观，博大精深', strokes: 10, gender: ['male'] },
        { char: '浩', element: '水', meaning: '浩然正气，气势如虹', strokes: 11, gender: ['male'] },
        { char: '波', element: '水', meaning: '波澜不惊，从容淡定', strokes: 9, gender: ['both'] },
        { char: '流', element: '水', meaning: '流水不腐，生生不息', strokes: 11, gender: ['both'] },
        { char: '涵', element: '水', meaning: '包容涵养，修养深厚', strokes: 12, gender: ['both'] },
        { char: '慧', element: '水', meaning: '聪慧过人，智慧如海', strokes: 15, gender: ['female'] },
        { char: '惠', element: '水', meaning: '惠泽他人，仁慈善良', strokes: 12, gender: ['female'] },
        { char: '辉', element: '水', meaning: '光辉灿烂，前程似锦', strokes: 15, gender: ['both'] },
        { char: '会', element: '水', meaning: '会当凌绝顶，志向远大', strokes: 13, gender: ['both'] },
        { char: '汇', element: '水', meaning: '汇聚精英，人才荟萃', strokes: 13, gender: ['both'] }
    ];

    // 更多火属性字符
    const fireChars = [
        { char: '炎', element: '火', meaning: '炎黄子孙，血脉相承', strokes: 8, gender: ['male'] },
        { char: '煜', element: '火', meaning: '光彩照人，熠熠生辉', strokes: 13, gender: ['both'] },
        { char: '烨', element: '火', meaning: '烨烨生辉，光芒万丈', strokes: 16, gender: ['both'] },
        { char: '灿', element: '火', meaning: '灿烂辉煌，光彩夺目', strokes: 17, gender: ['both'] },
        { char: '晖', element: '火', meaning: '阳光普照，温暖如春', strokes: 13, gender: ['both'] },
        { char: '焱', element: '火', meaning: '火焰升腾，热情如火', strokes: 12, gender: ['male'] },
        { char: '烁', element: '火', meaning: '光芒闪烁，璀璨夺目', strokes: 19, gender: ['both'] },
        { char: '炫', element: '火', meaning: '炫目耀眼，光彩照人', strokes: 9, gender: ['both'] },
        { char: '焕', element: '火', meaning: '焕然一新，神采焕发', strokes: 13, gender: ['both'] },
        { char: '炽', element: '火', meaning: '炽热如火，热情洋溢', strokes: 16, gender: ['both'] },
        { char: '燃', element: '火', meaning: '燃起希望，点燃梦想', strokes: 16, gender: ['both'] },
        { char: '熠', element: '火', meaning: '熠熠生辉，光彩动人', strokes: 15, gender: ['both'] },
        { char: '焰', element: '火', meaning: '火焰燃烧，热情似火', strokes: 12, gender: ['both'] },
        { char: '烽', element: '火', meaning: '烽火连天，英勇无畏', strokes: 11, gender: ['male'] },
        { char: '灯', element: '火', meaning: '明灯指路，智慧之光', strokes: 16, gender: ['both'] },
        { char: '德', element: '火', meaning: '德高望重，品德高尚', strokes: 15, gender: ['both'] },
        { char: '丹', element: '火', meaning: '丹心赤诚，纯真无邪', strokes: 4, gender: ['female'] },
        { char: '天', element: '火', meaning: '天高云淡，天赋异禀', strokes: 4, gender: ['both'] },
        { char: '日', element: '火', meaning: '日新月异，光明正大', strokes: 4, gender: ['both'] },
        { char: '明', element: '火', meaning: '明察秋毫，聪明睿智', strokes: 8, gender: ['both'] }
    ];

    // 更多土属性字符
    const earthChars = [
        { char: '坤', element: '土', meaning: '大地载物，厚德载物', strokes: 8, gender: ['male'] },
        { char: '圳', element: '土', meaning: '深圳特区，开拓创新', strokes: 6, gender: ['both'] },
        { char: '城', element: '土', meaning: '城池坚固，稳如磐石', strokes: 10, gender: ['both'] },
        { char: '培', element: '土', meaning: '培育成才，栽培英才', strokes: 11, gender: ['both'] },
        { char: '堃', element: '土', meaning: '厚德载物，包容万象', strokes: 11, gender: ['male'] },
        { char: '垚', element: '土', meaning: '山高土厚，稳重踏实', strokes: 9, gender: ['both'] },
        { char: '均', element: '土', meaning: '均衡和谐，公平正义', strokes: 7, gender: ['both'] },
        { char: '坚', element: '土', meaning: '坚强不屈，意志坚定', strokes: 11, gender: ['both'] },
        { char: '墨', element: '土', meaning: '墨宝珍贵，文采飞扬', strokes: 15, gender: ['both'] },
        { char: '基', element: '土', meaning: '基础稳固，根基深厚', strokes: 11, gender: ['both'] },
        { char: '安', element: '土', meaning: '安居乐业，平安幸福', strokes: 6, gender: ['both'] },
        { char: '宇', element: '土', meaning: '宇宙广阔，胸襟开阔', strokes: 6, gender: ['male'] },
        { char: '辰', element: '土', meaning: '星辰大海，志向远大', strokes: 7, gender: ['both'] },
        { char: '亚', element: '土', meaning: '亚洲之光，东方明珠', strokes: 8, gender: ['both'] },
        { char: '一', element: '土', meaning: '一心一意，专注专一', strokes: 1, gender: ['both'] },
        { char: '轩', element: '土', meaning: '气宇轩昂，风度翩翩', strokes: 10, gender: ['male'] },
        { char: '远', element: '土', meaning: '远大前程，志向远大', strokes: 17, gender: ['both'] },
        { char: '越', element: '土', meaning: '越来越好，超越自我', strokes: 12, gender: ['both'] },
        { char: '优', element: '土', meaning: '优秀卓越，品学兼优', strokes: 17, gender: ['both'] },
        { char: '阳', element: '土', meaning: '阳光灿烂，朝气蓬勃', strokes: 17, gender: ['both'] }
    ];

    // 通用美好字符
    const generalChars = [
        { char: '乐', element: '火', meaning: '快乐无忧，乐观向上', strokes: 15, gender: ['both'] },
        { char: '欢', element: '水', meaning: '欢声笑语，欢乐祥和', strokes: 22, gender: ['both'] },
        { char: '喜', element: '金', meaning: '喜气洋洋，喜从天降', strokes: 12, gender: ['both'] },
        { char: '悦', element: '金', meaning: '心悦诚服，愉悦快乐', strokes: 11, gender: ['both'] },
        { char: '美', element: '水', meaning: '美丽动人，美好如画', strokes: 9, gender: ['female'] },
        { char: '丽', element: '火', meaning: '美丽大方，丽质天成', strokes: 19, gender: ['female'] },
        { char: '娜', element: '火', meaning: '婀娜多姿，娜娜动人', strokes: 10, gender: ['female'] },
        { char: '婷', element: '火', meaning: '婷婷袅袅，美丽动人', strokes: 12, gender: ['female'] },
        { char: '媛', element: '火', meaning: '淑女贤媛，品德优良', strokes: 12, gender: ['female'] },
        { char: '妍', element: '水', meaning: '妍丽动人，美好可爱', strokes: 7, gender: ['female'] },
        { char: '勇', element: '土', meaning: '勇敢无畏，英勇善战', strokes: 9, gender: ['male'] },
        { char: '威', element: '土', meaning: '威风凛凛，威武不屈', strokes: 9, gender: ['male'] },
        { char: '武', element: '水', meaning: '武艺高强，文武双全', strokes: 8, gender: ['male'] },
        { char: '雄', element: '水', meaning: '雄心壮志，英雄豪杰', strokes: 12, gender: ['male'] },
        { char: '豪', element: '水', meaning: '豪情壮志，英雄豪杰', strokes: 14, gender: ['male'] },
        { char: '俊', element: '火', meaning: '俊朗英俊，人才俊秀', strokes: 9, gender: ['male'] },
        { char: '峰', element: '土', meaning: '登峰造极，山峰险峻', strokes: 10, gender: ['male'] },
        { char: '学', element: '水', meaning: '学而时习之，好学不倦', strokes: 16, gender: ['both'] },
        { char: '文', element: '水', meaning: '文质彬彬，文采飞扬', strokes: 4, gender: ['both'] },
        { char: '博', element: '水', meaning: '博学多才，博古通今', strokes: 12, gender: ['both'] }
    ];

    // 合并所有新字符
    const newChars = [...waterChars, ...fireChars, ...earthChars, ...generalChars];
    
    // 添加到原数组中（去重）
    newChars.forEach(newChar => {
        if (!NAME_DATABASE.find(existing => existing.char === newChar.char)) {
            NAME_DATABASE.push(newChar);
        }
    });

    console.log(`字库已扩展！当前包含 ${NAME_DATABASE.length} 个字符`);
    return NAME_DATABASE.length;
}

// 如果在浏览器环境中，自动执行扩展
if (typeof window !== 'undefined') {
    // 等待DOM加载完成后执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', expandNameDatabase);
    } else {
        expandNameDatabase();
    }
}

// 导出扩展函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { expandNameDatabase };
} 