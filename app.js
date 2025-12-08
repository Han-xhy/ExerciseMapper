// ========== 部位和器械映射表 ==========
// 根据所有动作数据中实际使用的部位和器械类型定义

// 部位名称映射（涵盖所有动作中使用的部位）
const partNames = {
    'chest': '胸部',           // 胸肌训练
    'back': '背部',            // 背肌训练
    'shoulders': '肩部',       // 肩部训练
    'arms': '手臂',            // 手臂训练（包含肱二头肌和肱三头肌）
    'legs': '腿部',            // 腿部训练
    'core': '核心'             // 核心肌群训练
};

// 部位颜色映射（用于CSS类名）
const partColors = {
    'chest': 'chest',
    'back': 'back',
    'shoulders': 'shoulders',
    'arms': 'arms',
    'legs': 'legs',
    'core': 'core'
};

// 器械名称映射（涵盖所有动作中使用的器械类型）
const equipmentNames = {
    'barbell': '杠铃',         // 杠铃训练
    'dumbbell': '哑铃',        // 哑铃训练
    'bodyweight': '徒手',      // 徒手训练（包括自重和小器械如弹力带、健腹轮等）
    // 胸部固定器械
    'chest-press': '坐姿推胸机',
    'pec-fly': '蝴蝶机',
    'incline-chest-press': '上斜推胸机',
    'decline-chest-press': '下斜推胸机',
    'cable-crossover': '龙门架',
    // 背部固定器械
    'lat-pulldown': '高位下拉机',
    'seated-row': '坐姿划船机',
    'low-row': '低位划船机',
    'back-extension': '山羊挺身机',
    'face-pull': '面拉机',
    'assisted-pull-up': '助力引体向上机',
    // 肩部固定器械
    'shoulder-press': '坐姿肩推机',
    'lateral-raise': '侧平举机',
    'rear-delt-fly': '反向飞鸟机',
    'upright-row': '直立划船机',
    // 手臂固定器械
    'bicep-curl': '肱二头肌弯举机',
    'tricep-pushdown': '肱三头肌下压机',
    'tricep-dip': '助力臂屈伸机',
    'wrist-curl': '腕弯举机',
    // 核心固定器械
    'ab-crunch': '坐姿腹肌卷腹机',
    'leg-raise': '举腿机',
    'russian-twist': '俄罗斯转体机',
    'plank-station': '平板支撑机',
    // 腿部固定器械
    'leg-press': '坐姿腿举机',
    'leg-extension': '腿屈伸机',
    'leg-curl': '腿弯举机',
    'calf-raise': '小腿提踵机',
    'hack-squat': '哈克深蹲机',
    'adductor': '大腿内收机',
    'abductor': '大腿外展机',
    // 臀部固定器械
    'glute-bridge': '臀推机',
    'hip-thrust': '髋推机',
    'glute-isolator': '臀部孤立训练机',
    // 综合训练器械
    'smith-machine': '史密斯机',
    'cable-machine': '龙门架（综合）',
    'multi-hip': '多髋机',
    'functional-trainer': '功能训练机',
    // 通用固定器械（兼容旧数据）
    'machine': '固定器械'
};

// 器械类型分类（用于CSS类名）
const equipmentTypes = {
    'barbell': 'barbell',
    'dumbbell': 'dumbbell',
    'bodyweight': 'bodyweight',
    'machine': 'machine',
    // 所有固定器械统一使用 machine 类型
    'chest-press': 'machine',
    'pec-fly': 'machine',
    'incline-chest-press': 'machine',
    'decline-chest-press': 'machine',
    'cable-crossover': 'machine',
    'lat-pulldown': 'machine',
    'seated-row': 'machine',
    'low-row': 'machine',
    'back-extension': 'machine',
    'face-pull': 'machine',
    'assisted-pull-up': 'machine',
    'shoulder-press': 'machine',
    'lateral-raise': 'machine',
    'rear-delt-fly': 'machine',
    'upright-row': 'machine',
    'bicep-curl': 'machine',
    'tricep-pushdown': 'machine',
    'tricep-dip': 'machine',
    'wrist-curl': 'machine',
    'ab-crunch': 'machine',
    'leg-raise': 'machine',
    'russian-twist': 'machine',
    'plank-station': 'machine',
    'leg-press': 'machine',
    'leg-extension': 'machine',
    'leg-curl': 'machine',
    'calf-raise': 'machine',
    'hack-squat': 'machine',
    'adductor': 'machine',
    'abductor': 'machine',
    'glute-bridge': 'machine',
    'hip-thrust': 'machine',
    'glute-isolator': 'machine',
    'smith-machine': 'machine',
    'cable-machine': 'machine',
    'multi-hip': 'machine',
    'functional-trainer': 'machine'
};

// 子肌群名称映射（用于各部位的细分）
const subPartNames = {
    // 胸部子肌群
    'upper-chest': '上胸',           // 上胸
    'middle-chest': '中胸',          // 中胸
    'lower-chest': '下胸',           // 下胸
    
    // 背部子肌群
    'lats': '背阔肌',                // 背阔肌（宽背）
    'mid-back': '中背',              // 菱形肌/中背
    'lower-back': '下背',            // 下背/竖脊肌
    'traps-upper': '上斜方肌',       // 斜方肌（上）
    'traps-mid': '中斜方肌',         // 斜方肌（中）
    'traps-lower': '下斜方肌',       // 斜方肌（下）
    
    // 肩部子肌群
    'front-delt': '前束',            // 前束
    'lateral-delt': '中束',          // 中束
    'rear-delt': '后束',             // 后束
    
    // 手臂子肌群
    'biceps-long': '肱二头肌长头',   // 肱二头肌（长头）
    'biceps-short': '肱二头肌短头',  // 肱二头肌（短头）
    'triceps-lateral': '肱三头肌外侧头', // 肱三头肌（外侧头）
    'triceps-long': '肱三头肌长头',  // 肱三头肌（长头）
    'triceps-medial': '肱三头肌内侧头', // 肱三头肌（内侧头）
    'forearms-flexors': '前臂屈肌',  // 前臂（屈肌）
    'forearms-extensors': '前臂伸肌', // 前臂（伸肌）
    
    // 核心子肌群
    'upper-abs': '上腹',             // 上腹
    'lower-abs': '下腹',             // 下腹
    'obliques': '侧腹',              // 侧腹/腹外斜肌
    'core-stability': '核心稳定',    // 下背/核心稳定
    
    // 腿部子肌群
    'quads-rectus': '股直肌',        // 股四头肌（股直肌）
    'quads-lateral': '股外侧肌',     // 股四头肌（股外侧肌）
    'quads-medial': '股内侧肌',      // 股四头肌（股内侧肌）
    'hamstrings-biceps': '股二头肌', // 腘绳肌（股二头肌）
    'hamstrings-semitendinosus': '半腱肌', // 腘绳肌（半腱肌）
    'calves-gastrocnemius': '腓肠肌', // 小腿（腓肠肌）
    'calves-soleus': '比目鱼肌',      // 小腿（比目鱼肌）
    'glutes-maximus': '臀大肌',      // 臀大肌
    'glutes-medius': '臀中肌'        // 臀中肌/髋外展
};

// 从实际数据中动态获取部位列表
function getWorkoutParts() {
    const defaultData = getDefaultWorkouts();
    const partsSet = new Set();
    
    defaultData.forEach(workout => {
        const parts = normalizePart(workout.part);
        parts.forEach(part => partsSet.add(part));
    });
    
    // 转换为数组并排序
    return Array.from(partsSet).sort().map(partId => ({
        id: partId,
        name: partNames[partId] || partId
    }));
}

// 从实际数据中动态获取器械类型列表
function getEquipmentTypes() {
    const defaultData = getDefaultWorkouts();
    const equipmentSet = new Set();
    
    defaultData.forEach(workout => {
        if (workout.equipment) {
            equipmentSet.add(workout.equipment);
        }
    });
    
    // 转换为数组，按名称长度从短到长排序
    return Array.from(equipmentSet).map(equipmentId => ({
        id: equipmentId,
        name: equipmentNames[equipmentId] || equipmentId
    })).sort((a, b) => {
        const lenDiff = a.name.length - b.name.length;
        if (lenDiff !== 0) return lenDiff;
        // 如果长度相同，按字母顺序排序
        return a.name.localeCompare(b.name);
    });
}

// 根据选中的器械获取可用的肌群（用于联动筛选）
function getAvailableParts(selectedEquipment) {
    const defaultData = getDefaultWorkouts();
    const partsSet = new Set();
    
    defaultData.forEach(workout => {
        // 如果选择了器械，只考虑该器械的动作
        if (selectedEquipment && workout.equipment !== selectedEquipment) {
            return;
        }
        const parts = normalizePart(workout.part);
        parts.forEach(part => partsSet.add(part));
    });
    
    return Array.from(partsSet).sort();
}

// 根据选中的肌群获取可用的器械（用于联动筛选）
function getAvailableEquipment(selectedPart, selectedSubPart) {
    const defaultData = getDefaultWorkouts();
    const equipmentSet = new Set();
    
    defaultData.forEach(workout => {
        // 如果选择了肌群，只考虑该肌群的动作
        if (selectedPart && !hasPart(workout, selectedPart)) {
            return;
        }
        // 如果选择了子肌群，只考虑该子肌群的动作
        if (selectedSubPart && workout.subPart !== selectedSubPart) {
            return;
        }
        if (workout.equipment) {
            equipmentSet.add(workout.equipment);
        }
    });
    
    // 按名称长度从短到长排序
    return Array.from(equipmentSet).map(equipmentId => ({
        id: equipmentId,
        name: equipmentNames[equipmentId] || equipmentId
    })).sort((a, b) => {
        const lenDiff = a.name.length - b.name.length;
        if (lenDiff !== 0) return lenDiff;
        return a.name.localeCompare(b.name);
    }).map(item => item.id);
}

// 根据选中的器械获取可用的子肌群（用于联动筛选）
function getAvailableSubParts(selectedEquipment) {
    const defaultData = getDefaultWorkouts();
    const subPartMap = new Map();
    
    defaultData.forEach(workout => {
        // 如果选择了器械，只考虑该器械的动作
        if (selectedEquipment && workout.equipment !== selectedEquipment) {
            return;
        }
        if (workout.subPart) {
            const parts = normalizePart(workout.part);
            parts.forEach(partId => {
                const key = `${partId}-${workout.subPart}`;
                if (!subPartMap.has(key)) {
                    subPartMap.set(key, {
                        partId: partId,
                        partName: partNames[partId] || partId,
                        subPartId: workout.subPart,
                        subPartName: subPartNames[workout.subPart] || workout.subPart
                    });
                }
            });
        }
    });
    
    // 转换为数组，按部位分组排序（从上到下：肩部、胸部、背部、手臂、核心、腿部）
    return Array.from(subPartMap.values()).sort((a, b) => {
        // 先按部位排序（从上到下）
        if (a.partId !== b.partId) {
            const partOrder = ['shoulders', 'chest', 'back', 'arms', 'core', 'legs'];
            const aIndex = partOrder.indexOf(a.partId);
            const bIndex = partOrder.indexOf(b.partId);
            if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
            if (aIndex !== -1) return -1;
            if (bIndex !== -1) return 1;
            return a.partId.localeCompare(b.partId);
        }
        // 同部位内按子肌群名称排序
        return a.subPartName.localeCompare(b.subPartName);
    });
}

// 从实际数据中动态获取子肌群列表（根据选中的部位）
function getSubParts(partId) {
    if (!partId) return [];
    
    const defaultData = getDefaultWorkouts();
    const subPartSet = new Set();
    
    defaultData.forEach(workout => {
        if (hasPart(workout, partId) && workout.subPart) {
            subPartSet.add(workout.subPart);
        }
    });
    
    // 转换为数组并排序
    return Array.from(subPartSet).sort().map(subPartId => ({
        id: subPartId,
        name: subPartNames[subPartId] || subPartId
    }));
}

// 获取所有子肌群（带主部位信息）
function getAllSubParts() {
    const defaultData = getDefaultWorkouts();
    const subPartMap = new Map(); // 使用 Map 避免重复
    
    defaultData.forEach(workout => {
        if (workout.subPart) {
            const parts = normalizePart(workout.part);
            parts.forEach(partId => {
                const key = `${partId}-${workout.subPart}`;
                if (!subPartMap.has(key)) {
                    subPartMap.set(key, {
                        partId: partId,
                        partName: partNames[partId] || partId,
                        subPartId: workout.subPart,
                        subPartName: subPartNames[workout.subPart] || workout.subPart
                    });
                }
            });
        }
    });
    
    // 转换为数组，按部位分组排序（从上到下：肩部、胸部、背部、手臂、核心、腿部）
    return Array.from(subPartMap.values()).sort((a, b) => {
        // 先按部位排序（从上到下）
        if (a.partId !== b.partId) {
            const partOrder = ['shoulders', 'chest', 'back', 'arms', 'core', 'legs'];
            const aIndex = partOrder.indexOf(a.partId);
            const bIndex = partOrder.indexOf(b.partId);
            if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
            if (aIndex !== -1) return -1;
            if (bIndex !== -1) return 1;
            return a.partId.localeCompare(b.partId);
        }
        // 同部位内按子肌群名称排序
        return a.subPartName.localeCompare(b.subPartName);
    });
}

// 辅助函数：标准化 part 字段（兼容字符串和数组）
function normalizePart(part) {
    if (Array.isArray(part)) {
        return part;
    }
    return part ? [part] : [];
}

// 辅助函数：检查动作是否包含指定部位
function hasPart(workout, partId) {
    const parts = normalizePart(workout.part);
    return parts.includes(partId);
}

// 预设的锻炼项目列表（按部位+器械分类）
// 使用 var 声明为全局变量，确保可以在其他脚本中访问
// part 字段支持字符串（单部位）或数组（多部位）
var defaultWorkouts = [
    // ========== 一、胸部训练 ==========
    
    // 1. 杠铃
    { id: 101, name: '平板杠铃卧推', sets: '4组 x 8-12次', time: 12, calories: 120, part: 'chest', equipment: 'barbell', subPart: 'middle-chest' },
    { id: 102, name: '上斜杠铃卧推', sets: '4组 x 8-12次', time: 12, calories: 115, part: 'chest', equipment: 'barbell', subPart: 'upper-chest' },
    { id: 103, name: '下斜杠铃卧推', sets: '4组 x 8-12次', time: 12, calories: 110, part: 'chest', equipment: 'barbell', subPart: 'lower-chest' },
    { id: 104, name: '杠铃仰卧飞鸟', sets: '3组 x 12-15次', time: 10, calories: 80, part: 'chest', equipment: 'barbell', subPart: 'middle-chest' },
    
    // 2. 哑铃
    { id: 111, name: '平板哑铃卧推', sets: '4组 x 8-12次', time: 12, calories: 115, part: 'chest', equipment: 'dumbbell', subPart: 'middle-chest' },
    { id: 112, name: '上斜哑铃卧推', sets: '4组 x 8-12次', time: 12, calories: 110, part: 'chest', equipment: 'dumbbell', subPart: 'upper-chest' },
    { id: 113, name: '下斜哑铃卧推', sets: '4组 x 8-12次', time: 12, calories: 105, part: 'chest', equipment: 'dumbbell', subPart: 'lower-chest' },
    { id: 114, name: '哑铃飞鸟', sets: '3组 x 12-15次', time: 10, calories: 75, part: 'chest', equipment: 'dumbbell', subPart: 'middle-chest' },
    { id: 115, name: '哑铃夹胸', sets: '3组 x 12-15次', time: 10, calories: 70, part: 'chest', equipment: 'dumbbell', subPart: 'middle-chest' },
    { id: 116, name: '上斜哑铃飞鸟', sets: '3组 x 12-15次', time: 10, calories: 70, part: 'chest', equipment: 'dumbbell', subPart: 'upper-chest' },
    { id: 117, name: '下斜哑铃飞鸟', sets: '3组 x 12-15次', time: 10, calories: 65, part: 'chest', equipment: 'dumbbell', subPart: 'lower-chest' },
    { id: 118, name: '哑铃对握卧推', sets: '4组 x 8-12次', time: 12, calories: 110, part: 'chest', equipment: 'dumbbell', subPart: 'middle-chest' },
    
    // 3. 固定器械
    { id: 121, name: '坐姿推胸机', sets: '3组 x 10-12次', time: 10, calories: 85, part: 'chest', equipment: 'chest-press', subPart: 'middle-chest' },
    { id: 122, name: '蝴蝶机夹胸', sets: '3组 x 12-15次', time: 10, calories: 70, part: 'chest', equipment: 'pec-fly', subPart: 'middle-chest' },
    { id: 123, name: '史密斯机卧推', sets: '4组 x 8-12次', time: 12, calories: 110, part: 'chest', equipment: 'smith-machine', subPart: 'middle-chest' },
    { id: 124, name: '上斜推胸机', sets: '4组 x 8-12次', time: 12, calories: 105, part: 'chest', equipment: 'incline-chest-press', subPart: 'upper-chest' },
    { id: 125, name: '下斜推胸机', sets: '4组 x 8-12次', time: 12, calories: 100, part: 'chest', equipment: 'decline-chest-press', subPart: 'lower-chest' },
    { id: 126, name: '龙门架夹胸（高拉）', sets: '3组 x 12-15次', time: 10, calories: 75, part: 'chest', equipment: 'cable-crossover', subPart: 'upper-chest' },
    { id: 127, name: '龙门架夹胸（低拉）', sets: '3组 x 12-15次', time: 10, calories: 75, part: 'chest', equipment: 'cable-crossover', subPart: 'lower-chest' },
    
    // 4. 徒手
    { id: 131, name: '标准俯卧撑', sets: '3组 x 15-20次', time: 8, calories: 60, part: 'chest', equipment: 'bodyweight', subPart: 'middle-chest' },
    { id: 132, name: '宽距俯卧撑', sets: '3组 x 12-15次', time: 7, calories: 55, part: 'chest', equipment: 'bodyweight', subPart: 'middle-chest' },
    { id: 133, name: '窄距俯卧撑', sets: '3组 x 12-15次', time: 7, calories: 55, part: 'chest', equipment: 'bodyweight', subPart: 'middle-chest' },
    { id: 134, name: '下斜俯卧撑', sets: '3组 x 10-15次', time: 8, calories: 65, part: 'chest', equipment: 'bodyweight', subPart: 'upper-chest' },
    { id: 135, name: '双杠臂屈伸', sets: '3组 x 10-15次', time: 10, calories: 80, part: 'chest', equipment: 'bodyweight', subPart: 'lower-chest' },
    { id: 136, name: '弹力带夹胸', sets: '3组 x 15-20次', time: 8, calories: 50, part: 'chest', equipment: 'bodyweight', subPart: 'middle-chest' },
    
    // ========== 二、背部训练 ==========
    
    // 1. 杠铃
    { id: 201, name: '杠铃俯身划船', sets: '4组 x 8-12次', time: 12, calories: 130, part: 'back', equipment: 'barbell', subPart: 'mid-back' },
    { id: 202, name: '硬拉', sets: '4组 x 6-10次', time: 15, calories: 150, part: ['back', 'legs'], equipment: 'barbell', subPart: 'lower-back' },
    { id: 203, name: '罗马尼亚硬拉', sets: '4组 x 8-10次', time: 12, calories: 140, part: ['back', 'legs'], equipment: 'barbell', subPart: 'lower-back' },
    { id: 204, name: '杠铃高位下拉', sets: '4组 x 8-12次', time: 12, calories: 110, part: 'back', equipment: 'barbell', subPart: 'lats' },
    
    // 2. 哑铃
    { id: 211, name: '单臂哑铃划船', sets: '4组 x 10-12次/侧', time: 12, calories: 100, part: 'back', equipment: 'dumbbell', subPart: 'lats' },
    { id: 212, name: '哑铃俯身侧平举', sets: '3组 x 12-15次', time: 8, calories: 60, part: 'back', equipment: 'dumbbell', subPart: 'mid-back' },
    { id: 213, name: '哑铃硬拉', sets: '4组 x 8-12次', time: 12, calories: 120, part: ['back', 'legs'], equipment: 'dumbbell', subPart: 'lower-back' },
    { id: 214, name: '哑铃坐姿划船', sets: '4组 x 10-12次', time: 10, calories: 95, part: 'back', equipment: 'dumbbell', subPart: 'mid-back' },
    { id: 215, name: '哑铃俯身划船', sets: '4组 x 10-12次', time: 12, calories: 105, part: 'back', equipment: 'dumbbell', subPart: 'mid-back' },
    { id: 216, name: '哑铃T型划船', sets: '4组 x 10-12次', time: 12, calories: 100, part: 'back', equipment: 'dumbbell', subPart: 'mid-back' },
    { id: 217, name: '哑铃反向飞鸟', sets: '3组 x 12-15次', time: 8, calories: 60, part: 'back', equipment: 'dumbbell', subPart: 'mid-back' },
    
    // 3. 固定器械
    { id: 221, name: '高位下拉机（宽握）', sets: '4组 x 10-12次', time: 12, calories: 110, part: 'back', equipment: 'lat-pulldown', subPart: 'lats' },
    { id: 222, name: '高位下拉机（窄握反手）', sets: '4组 x 10-12次', time: 12, calories: 105, part: 'back', equipment: 'lat-pulldown', subPart: 'lats' },
    { id: 223, name: '坐姿划船机（宽握）', sets: '4组 x 10-12次', time: 12, calories: 105, part: 'back', equipment: 'seated-row', subPart: 'mid-back' },
    { id: 224, name: '坐姿划船机（窄握）', sets: '4组 x 10-12次', time: 12, calories: 100, part: 'back', equipment: 'seated-row', subPart: 'mid-back' },
    { id: 225, name: '低位划船机', sets: '4组 x 10-12次', time: 12, calories: 110, part: 'back', equipment: 'low-row', subPart: 'lats' },
    { id: 226, name: '山羊挺身机', sets: '3组 x 15-20次', time: 10, calories: 70, part: 'back', equipment: 'back-extension', subPart: 'lower-back' },
    { id: 227, name: '面拉机', sets: '3组 x 12-15次', time: 10, calories: 80, part: 'back', equipment: 'face-pull', subPart: 'mid-back' },
    { id: 228, name: '助力引体向上机', sets: '3组 x 8-12次', time: 10, calories: 90, part: 'back', equipment: 'assisted-pull-up', subPart: 'lats' },
    { id: 229, name: '史密斯机俯身划船', sets: '4组 x 8-12次', time: 12, calories: 115, part: 'back', equipment: 'smith-machine', subPart: 'mid-back' },
    
    // 4. 徒手
    { id: 231, name: '引体向上', sets: '4组 x 8-12次', time: 12, calories: 120, part: ['back', 'arms'], equipment: 'bodyweight', subPart: 'lats' },
    { id: 232, name: '辅助引体向上', sets: '3组 x 10-15次', time: 10, calories: 100, part: ['back', 'arms'], equipment: 'bodyweight', subPart: 'lats' },
    { id: 233, name: '反向划船', sets: '3组 x 10-15次', time: 10, calories: 80, part: 'back', equipment: 'bodyweight', subPart: 'mid-back' },
    { id: 234, name: '弹力带下拉', sets: '3组 x 15-20次', time: 8, calories: 65, part: 'back', equipment: 'bodyweight', subPart: 'lats' },
    { id: 235, name: '健腹轮', sets: '3组 x 10-15次', time: 10, calories: 80, part: 'back', equipment: 'bodyweight', subPart: 'lower-back' },
    
    // ========== 三、肩部训练 ==========
    
    // 1. 杠铃
    { id: 301, name: '杠铃肩推', sets: '4组 x 8-12次', time: 12, calories: 100, part: 'shoulders', equipment: 'barbell', subPart: 'front-delt' },
    { id: 302, name: '杠铃前平举', sets: '3组 x 12-15次', time: 8, calories: 60, part: 'shoulders', equipment: 'barbell', subPart: 'front-delt' },
    { id: 303, name: '杠铃立正划船', sets: '3组 x 10-12次', time: 8, calories: 65, part: 'shoulders', equipment: 'barbell', subPart: 'lateral-delt' },
    
    // 2. 哑铃
    { id: 311, name: '哑铃侧平举', sets: '3组 x 12-15次', time: 8, calories: 55, part: 'shoulders', equipment: 'dumbbell', subPart: 'lateral-delt' },
    { id: 312, name: '哑铃前平举', sets: '3组 x 12-15次', time: 8, calories: 55, part: 'shoulders', equipment: 'dumbbell', subPart: 'front-delt' },
    { id: 313, name: '哑铃俯身侧平举', sets: '3组 x 12-15次', time: 8, calories: 60, part: 'shoulders', equipment: 'dumbbell', subPart: 'rear-delt' },
    { id: 314, name: '哑铃阿诺德推举', sets: '4组 x 10-12次', time: 12, calories: 90, part: 'shoulders', equipment: 'dumbbell', subPart: 'front-delt' },
    { id: 315, name: '哑铃坐姿肩推', sets: '4组 x 10-12次', time: 12, calories: 95, part: 'shoulders', equipment: 'dumbbell', subPart: 'front-delt' },
    { id: 316, name: '哑铃站姿肩推', sets: '4组 x 10-12次', time: 12, calories: 100, part: 'shoulders', equipment: 'dumbbell', subPart: 'front-delt' },
    { id: 317, name: '哑铃Y型举', sets: '3组 x 12-15次', time: 8, calories: 60, part: 'shoulders', equipment: 'dumbbell', subPart: 'lateral-delt' },
    { id: 318, name: '哑铃W型举', sets: '3组 x 12-15次', time: 8, calories: 60, part: 'shoulders', equipment: 'dumbbell', subPart: 'rear-delt' },
    { id: 319, name: '哑铃耸肩', sets: '3组 x 15-20次', time: 8, calories: 50, part: 'shoulders', equipment: 'dumbbell', subPart: 'traps-upper' },
    
    // 3. 固定器械
    { id: 321, name: '坐姿肩推机', sets: '4组 x 10-12次', time: 12, calories: 95, part: 'shoulders', equipment: 'shoulder-press', subPart: 'front-delt' },
    { id: 322, name: '坐姿肩推机（单臂）', sets: '4组 x 10-12次/侧', time: 12, calories: 90, part: 'shoulders', equipment: 'shoulder-press', subPart: 'front-delt' },
    { id: 323, name: '侧平举机', sets: '3组 x 12-15次', time: 8, calories: 60, part: 'shoulders', equipment: 'lateral-raise', subPart: 'lateral-delt' },
    { id: 324, name: '反向飞鸟机', sets: '3组 x 12-15次', time: 8, calories: 65, part: 'shoulders', equipment: 'rear-delt-fly', subPart: 'rear-delt' },
    { id: 325, name: '直立划船机', sets: '3组 x 10-12次', time: 8, calories: 60, part: 'shoulders', equipment: 'upright-row', subPart: 'lateral-delt' },
    { id: 326, name: '龙门架侧平举', sets: '3组 x 12-15次', time: 8, calories: 60, part: 'shoulders', equipment: 'cable-machine', subPart: 'lateral-delt' },
    { id: 327, name: '龙门架前平举', sets: '3组 x 12-15次', time: 8, calories: 55, part: 'shoulders', equipment: 'cable-machine', subPart: 'front-delt' },
    { id: 328, name: '龙门架俯身侧平举', sets: '3组 x 12-15次', time: 8, calories: 60, part: 'shoulders', equipment: 'cable-machine', subPart: 'rear-delt' },
    
    // 4. 徒手
    { id: 331, name: '倒立俯卧撑', sets: '3组 x 8-12次', time: 10, calories: 85, part: 'shoulders', equipment: 'bodyweight', subPart: 'front-delt' },
    { id: 332, name: '弹力带侧平举', sets: '3组 x 15-20次', time: 8, calories: 50, part: 'shoulders', equipment: 'bodyweight', subPart: 'lateral-delt' },
    { id: 333, name: '弹力带前平举', sets: '3组 x 15-20次', time: 8, calories: 50, part: 'shoulders', equipment: 'bodyweight', subPart: 'front-delt' },
    { id: 334, name: '绳索面拉', sets: '3组 x 12-15次', time: 10, calories: 65, part: 'shoulders', equipment: 'bodyweight', subPart: 'rear-delt' },
    
    // ========== 四、手臂训练 ==========
    
    // （一）肱二头肌 - 1. 杠铃
    { id: 401, name: '杠铃弯举', sets: '4组 x 10-12次', time: 10, calories: 70, part: 'arms', equipment: 'barbell', subPart: 'biceps-short' },
    { id: 402, name: '反握杠铃弯举', sets: '3组 x 10-12次', time: 8, calories: 65, part: 'arms', equipment: 'barbell', subPart: 'biceps-short' },
    { id: 403, name: '窄距杠铃弯举', sets: '3组 x 10-12次', time: 8, calories: 70, part: 'arms', equipment: 'barbell', subPart: 'biceps-long' },
    
    // （一）肱二头肌 - 2. 哑铃
    { id: 411, name: '哑铃交替弯举', sets: '4组 x 10-12次/侧', time: 12, calories: 75, part: 'arms', equipment: 'dumbbell', subPart: 'biceps-short' },
    { id: 412, name: '哑铃锤式弯举', sets: '3组 x 12-15次', time: 8, calories: 60, part: 'arms', equipment: 'dumbbell', subPart: 'biceps-short' },
    { id: 413, name: '哑铃集中弯举', sets: '3组 x 12-15次', time: 8, calories: 65, part: 'arms', equipment: 'dumbbell', subPart: 'biceps-short' },
    { id: 414, name: '哑铃坐姿弯举', sets: '3组 x 12-15次', time: 8, calories: 60, part: 'arms', equipment: 'dumbbell', subPart: 'biceps-short' },
    { id: 415, name: '哑铃斜托弯举', sets: '3组 x 12-15次', time: 8, calories: 65, part: 'arms', equipment: 'dumbbell', subPart: 'biceps-long' },
    { id: 416, name: '哑铃上斜弯举', sets: '3组 x 12-15次', time: 8, calories: 60, part: 'arms', equipment: 'dumbbell', subPart: 'biceps-short' },
    { id: 417, name: '哑铃21响礼炮', sets: '3组 x 21次', time: 10, calories: 70, part: 'arms', equipment: 'dumbbell', subPart: 'biceps-short' },
    
    // （一）肱二头肌 - 3. 固定器械
    { id: 421, name: '肱二头肌弯举机', sets: '3组 x 12-15次', time: 8, calories: 55, part: 'arms', equipment: 'bicep-curl', subPart: 'biceps-short' },
    { id: 422, name: '牧师椅弯举机', sets: '3组 x 12-15次', time: 8, calories: 60, part: 'arms', equipment: 'bicep-curl', subPart: 'biceps-long' },
    { id: 423, name: '龙门架弯举', sets: '3组 x 12-15次', time: 8, calories: 60, part: 'arms', equipment: 'cable-machine', subPart: 'biceps-short' },
    { id: 424, name: '史密斯机弯举', sets: '3组 x 10-12次', time: 8, calories: 65, part: 'arms', equipment: 'smith-machine', subPart: 'biceps-short' },
    
    // （一）肱二头肌 - 4. 徒手
    { id: 431, name: '窄握引体向上', sets: '3组 x 8-12次', time: 10, calories: 80, part: 'arms', equipment: 'bodyweight', subPart: 'biceps-long' },
    { id: 432, name: '弹力带弯举', sets: '3组 x 15-20次', time: 8, calories: 50, part: 'arms', equipment: 'bodyweight', subPart: 'biceps-short' },
    
    // （二）肱三头肌 - 1. 杠铃
    { id: 441, name: '杠铃颈后臂屈伸', sets: '4组 x 10-12次', time: 10, calories: 70, part: 'arms', equipment: 'barbell', subPart: 'triceps-long' },
    { id: 442, name: '窄距杠铃卧推', sets: '4组 x 8-12次', time: 10, calories: 75, part: 'arms', equipment: 'barbell', subPart: 'triceps-lateral' },
    
    // （二）肱三头肌 - 2. 哑铃
    { id: 451, name: '哑铃单臂颈后臂屈伸', sets: '4组 x 10-12次/侧', time: 12, calories: 75, part: 'arms', equipment: 'dumbbell', subPart: 'triceps-long' },
    { id: 452, name: '哑铃俯身臂屈伸', sets: '3组 x 12-15次', time: 8, calories: 60, part: 'arms', equipment: 'dumbbell', subPart: 'triceps-lateral' },
    { id: 453, name: '哑铃凳上臂屈伸', sets: '3组 x 12-15次', time: 8, calories: 65, part: 'arms', equipment: 'dumbbell', subPart: 'triceps-lateral' },
    { id: 454, name: '哑铃过顶臂屈伸', sets: '4组 x 10-12次', time: 10, calories: 70, part: 'arms', equipment: 'dumbbell', subPart: 'triceps-long' },
    { id: 455, name: '哑铃窄距推举', sets: '4组 x 8-12次', time: 10, calories: 75, part: 'arms', equipment: 'dumbbell', subPart: 'triceps-lateral' },
    
    // （二）肱三头肌 - 3. 固定器械
    { id: 461, name: '肱三头肌下压机', sets: '4组 x 10-12次', time: 10, calories: 70, part: 'arms', equipment: 'tricep-pushdown', subPart: 'triceps-lateral' },
    { id: 462, name: '龙门架绳索下压', sets: '4组 x 10-12次', time: 10, calories: 75, part: 'arms', equipment: 'cable-machine', subPart: 'triceps-lateral' },
    { id: 466, name: '龙门架绳索杆下压', sets: '3组 x 12次', time: 10, calories: 70, part: 'arms', equipment: 'cable-machine', subPart: 'triceps-medial' },
    { id: 463, name: '史密斯机颈后臂屈伸', sets: '4组 x 10-12次', time: 10, calories: 70, part: 'arms', equipment: 'smith-machine', subPart: 'triceps-long' },
    { id: 464, name: '助力臂屈伸机', sets: '3组 x 12-15次', time: 8, calories: 65, part: 'arms', equipment: 'tricep-dip', subPart: 'triceps-lateral' },
    { id: 465, name: '器械臂屈伸', sets: '4组 x 10-12次', time: 10, calories: 70, part: 'arms', equipment: 'tricep-pushdown', subPart: 'triceps-medial' },
    // （三）前臂 - 固定器械
    { id: 471, name: '腕弯举机（正手）', sets: '3组 x 15-20次', time: 8, calories: 40, part: 'arms', equipment: 'wrist-curl', subPart: 'forearms-flexors' },
    { id: 472, name: '腕弯举机（反手）', sets: '3组 x 15-20次', time: 8, calories: 40, part: 'arms', equipment: 'wrist-curl', subPart: 'forearms-extensors' },
    
    // （二）肱三头肌 - 4. 徒手
    { id: 481, name: '窄距俯卧撑', sets: '3组 x 12-15次', time: 8, calories: 60, part: 'arms', equipment: 'bodyweight', subPart: 'triceps-lateral' },
    { id: 482, name: '凳上反屈伸', sets: '3组 x 12-15次', time: 8, calories: 55, part: 'arms', equipment: 'bodyweight', subPart: 'triceps-lateral' },
    { id: 483, name: '双杠臂屈伸', sets: '3组 x 10-15次', time: 10, calories: 75, part: 'arms', equipment: 'bodyweight', subPart: 'triceps-lateral' },
    { id: 484, name: '弹力带臂屈伸', sets: '3组 x 15-20次', time: 8, calories: 55, part: 'arms', equipment: 'bodyweight', subPart: 'triceps-lateral' },
    
    // ========== 五、腿部训练 ==========
    
    // 1. 杠铃
    { id: 501, name: '杠铃深蹲', sets: '4组 x 8-12次', time: 15, calories: 180, part: 'legs', equipment: 'barbell', subPart: 'quads-rectus' },
    { id: 502, name: '杠铃箭步蹲', sets: '4组 x 10-12次/侧', time: 14, calories: 150, part: 'legs', equipment: 'barbell', subPart: 'quads-rectus' },
    { id: 503, name: '罗马尼亚硬拉', sets: '4组 x 8-10次', time: 12, calories: 140, part: 'legs', equipment: 'barbell', subPart: 'hamstrings-biceps' },
    { id: 504, name: '保加利亚分腿蹲', sets: '4组 x 10-12次/侧', time: 12, calories: 130, part: 'legs', equipment: 'barbell', subPart: 'quads-rectus' },
    { id: 505, name: '杠铃提踵', sets: '4组 x 15-20次', time: 10, calories: 70, part: 'legs', equipment: 'barbell', subPart: 'calves-gastrocnemius' },
    
    // 2. 哑铃
    { id: 511, name: '哑铃深蹲', sets: '4组 x 12-15次', time: 12, calories: 130, part: 'legs', equipment: 'dumbbell', subPart: 'quads-rectus' },
    { id: 512, name: '哑铃箭步蹲', sets: '4组 x 12-15次/侧', time: 12, calories: 120, part: 'legs', equipment: 'dumbbell', subPart: 'quads-rectus' },
    { id: 513, name: '哑铃臀桥', sets: '3组 x 15-20次', time: 10, calories: 90, part: 'legs', equipment: 'dumbbell', subPart: 'glutes-maximus' },
    { id: 514, name: '哑铃单腿硬拉', sets: '4组 x 10-12次/侧', time: 12, calories: 110, part: 'legs', equipment: 'dumbbell', subPart: 'hamstrings-biceps' },
    { id: 515, name: '哑铃高脚杯深蹲', sets: '4组 x 12-15次', time: 10, calories: 120, part: 'legs', equipment: 'dumbbell', subPart: 'quads-rectus' },
    { id: 516, name: '哑铃保加利亚分腿蹲', sets: '4组 x 10-12次/侧', time: 12, calories: 125, part: 'legs', equipment: 'dumbbell', subPart: 'quads-rectus' },
    { id: 517, name: '哑铃侧弓步', sets: '3组 x 12-15次/侧', time: 10, calories: 100, part: 'legs', equipment: 'dumbbell', subPart: 'quads-rectus' },
    { id: 518, name: '哑铃后弓步', sets: '4组 x 12-15次/侧', time: 12, calories: 115, part: 'legs', equipment: 'dumbbell', subPart: 'quads-rectus' },
    { id: 519, name: '哑铃单腿深蹲', sets: '3组 x 8-12次/侧', time: 12, calories: 110, part: 'legs', equipment: 'dumbbell', subPart: 'quads-rectus' },
    { id: 520, name: '哑铃提踵', sets: '4组 x 15-20次', time: 8, calories: 65, part: 'legs', equipment: 'dumbbell', subPart: 'calves-gastrocnemius' },
    { id: 521, name: '哑铃坐姿提踵', sets: '4组 x 15-20次', time: 8, calories: 60, part: 'legs', equipment: 'dumbbell', subPart: 'calves-soleus' },
    
    // 3. 固定器械
    { id: 521, name: '坐姿腿举机', sets: '4组 x 10-12次', time: 12, calories: 140, part: 'legs', equipment: 'leg-press', subPart: 'quads-lateral' },
    { id: 522, name: '单腿腿举', sets: '4组 x 10-12次/侧', time: 12, calories: 130, part: 'legs', equipment: 'leg-press', subPart: 'quads-lateral' },
    { id: 523, name: '腿屈伸机', sets: '3组 x 12-15次', time: 8, calories: 85, part: 'legs', equipment: 'leg-extension', subPart: 'quads-lateral' },
    { id: 524, name: '单腿腿屈伸', sets: '3组 x 12-15次/侧', time: 8, calories: 80, part: 'legs', equipment: 'leg-extension', subPart: 'quads-lateral' },
    { id: 525, name: '腿弯举机（坐姿）', sets: '3组 x 12-15次', time: 8, calories: 85, part: 'legs', equipment: 'leg-curl', subPart: 'hamstrings-biceps' },
    { id: 526, name: '腿弯举机（俯卧）', sets: '3组 x 12-15次', time: 8, calories: 85, part: 'legs', equipment: 'leg-curl', subPart: 'hamstrings-semitendinosus' },
    { id: 527, name: '小腿提踵机（站姿）', sets: '4组 x 15-20次', time: 10, calories: 75, part: 'legs', equipment: 'calf-raise', subPart: 'calves-gastrocnemius' },
    { id: 528, name: '小腿提踵机（坐姿）', sets: '4组 x 15-20次', time: 10, calories: 70, part: 'legs', equipment: 'calf-raise', subPart: 'calves-soleus' },
    { id: 529, name: '哈克深蹲机', sets: '4组 x 10-12次', time: 12, calories: 150, part: 'legs', equipment: 'hack-squat', subPart: 'quads-rectus' },
    { id: 530, name: '大腿内收机', sets: '3组 x 15-20次', time: 8, calories: 60, part: 'legs', equipment: 'adductor', subPart: 'quads-medial' },
    { id: 531, name: '大腿外展机', sets: '3组 x 15-20次', time: 8, calories: 60, part: 'legs', equipment: 'abductor', subPart: 'glutes-medius' },
    { id: 532, name: '史密斯机深蹲', sets: '4组 x 10-12次', time: 12, calories: 145, part: 'legs', equipment: 'smith-machine', subPart: 'quads-rectus' },
    { id: 533, name: '史密斯机提踵', sets: '4组 x 15-20次', time: 10, calories: 70, part: 'legs', equipment: 'smith-machine', subPart: 'calves-gastrocnemius' },
    // 臀部固定器械
    { id: 541, name: '臀推机', sets: '4组 x 10-12次', time: 12, calories: 120, part: 'legs', equipment: 'glute-bridge', subPart: 'glutes-maximus' },
    { id: 542, name: '负重臀推', sets: '4组 x 10-12次', time: 12, calories: 125, part: 'legs', equipment: 'glute-bridge', subPart: 'glutes-maximus' },
    { id: 543, name: '髋推机', sets: '4组 x 10-12次', time: 12, calories: 120, part: 'legs', equipment: 'hip-thrust', subPart: 'glutes-maximus' },
    { id: 544, name: '臀部孤立训练机（外展）', sets: '3组 x 15-20次', time: 8, calories: 60, part: 'legs', equipment: 'glute-isolator', subPart: 'glutes-medius' },
    { id: 545, name: '臀部孤立训练机（后伸）', sets: '3组 x 15-20次', time: 8, calories: 60, part: 'legs', equipment: 'glute-isolator', subPart: 'glutes-maximus' },
    
    // 4. 徒手
    { id: 551, name: '徒手深蹲', sets: '3组 x 15-20次', time: 8, calories: 80, part: ['legs', 'core'], equipment: 'bodyweight', subPart: 'quads-rectus' },
    { id: 552, name: '箭步蹲', sets: '3组 x 15-20次/侧', time: 10, calories: 90, part: 'legs', equipment: 'bodyweight', subPart: 'quads-rectus' },
    { id: 553, name: '提踵', sets: '4组 x 15-20次', time: 8, calories: 60, part: 'legs', equipment: 'bodyweight', subPart: 'calves-gastrocnemius' },
    { id: 554, name: '弹力带臀桥', sets: '3组 x 15-20次', time: 8, calories: 70, part: 'legs', equipment: 'bodyweight', subPart: 'glutes-maximus' },
    { id: 555, name: '弹力带腿弯举', sets: '3组 x 15-20次', time: 8, calories: 65, part: 'legs', equipment: 'bodyweight', subPart: 'hamstrings-biceps' },
    
    // ========== 六、核心训练 ==========
    
    // 1. 徒手
    { id: 601, name: '平板支撑', sets: '3组 x 60秒', time: 10, calories: 50, part: 'core', equipment: 'bodyweight', subPart: 'core-stability' },
    { id: 602, name: '卷腹', sets: '3组 x 20-25次', time: 8, calories: 45, part: 'core', equipment: 'bodyweight', subPart: 'upper-abs' },
    { id: 603, name: '仰卧起坐', sets: '3组 x 20-25次', time: 8, calories: 50, part: 'core', equipment: 'bodyweight', subPart: 'upper-abs' },
    { id: 604, name: '俄罗斯转体', sets: '3组 x 20-30次', time: 8, calories: 55, part: 'core', equipment: 'bodyweight', subPart: 'obliques' },
    { id: 605, name: '悬垂举腿', sets: '3组 x 10-15次', time: 10, calories: 75, part: 'core', equipment: 'bodyweight', subPart: 'lower-abs' },
    { id: 606, name: '登山跑', sets: '3组 x 30次', time: 8, calories: 70, part: 'core', equipment: 'bodyweight', subPart: 'core-stability' },
    { id: 607, name: '侧平板支撑', sets: '3组 x 45秒/侧', time: 10, calories: 55, part: 'core', equipment: 'bodyweight', subPart: 'obliques' },
    { id: 608, name: '单腿平板支撑', sets: '3组 x 30秒/侧', time: 10, calories: 60, part: 'core', equipment: 'bodyweight', subPart: 'core-stability' },
    { id: 609, name: '龙旗', sets: '3组 x 8-12次', time: 10, calories: 90, part: 'core', equipment: 'bodyweight', subPart: 'lower-abs' },
    
    // 2. 固定器械
    { id: 611, name: '罗马椅抬腿', sets: '3组 x 15-20次', time: 10, calories: 70, part: 'core', equipment: 'leg-raise', subPart: 'lower-abs' },
    { id: 612, name: '器械卷腹', sets: '3组 x 15-20次', time: 8, calories: 60, part: 'core', equipment: 'ab-crunch', subPart: 'upper-abs' },
    { id: 613, name: '器械扭腰机', sets: '3组 x 20次/侧', time: 10, calories: 65, part: 'core', equipment: 'russian-twist', subPart: 'obliques' },
    { id: 614, name: '悬垂提臀抬腿', sets: '3组 x 10-15次', time: 10, calories: 80, part: 'core', equipment: 'leg-raise', subPart: 'lower-abs' },
    
    // 3. 小器械
    { id: 621, name: '健腹轮', sets: '3组 x 10-15次', time: 10, calories: 80, part: 'core', equipment: 'bodyweight', subPart: 'core-stability' },
    { id: 622, name: '瑜伽球卷腹', sets: '3组 x 15-20次', time: 8, calories: 60, part: 'core', equipment: 'bodyweight', subPart: 'upper-abs' },
    { id: 623, name: '药球转体', sets: '3组 x 20次/侧', time: 10, calories: 70, part: 'core', equipment: 'bodyweight', subPart: 'obliques' },
    { id: 624, name: '弹力带抗阻转体', sets: '3组 x 20次/侧', time: 10, calories: 55, part: 'core', equipment: 'bodyweight', subPart: 'obliques' },
    { id: 625, name: '土耳其起立', sets: '3组 x 5-8次/侧', time: 12, calories: 85, part: 'core', equipment: 'bodyweight', subPart: 'core-stability' },
    
    // 4. 哑铃核心训练
    { id: 631, name: '哑铃侧弯', sets: '3组 x 15-20次/侧', time: 8, calories: 60, part: 'core', equipment: 'dumbbell', subPart: 'obliques' },
    { id: 632, name: '哑铃俄罗斯转体', sets: '3组 x 20-30次', time: 8, calories: 65, part: 'core', equipment: 'dumbbell', subPart: 'obliques' },
    { id: 633, name: '哑铃伐木式', sets: '3组 x 12-15次/侧', time: 10, calories: 70, part: 'core', equipment: 'dumbbell', subPart: 'obliques' },
    { id: 634, name: '哑铃过顶卷腹', sets: '3组 x 15-20次', time: 8, calories: 65, part: 'core', equipment: 'dumbbell', subPart: 'upper-abs' },
    { id: 635, name: '哑铃死虫式', sets: '3组 x 12-15次/侧', time: 10, calories: 60, part: 'core', equipment: 'dumbbell', subPart: 'core-stability' }
];

const weekDays = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

let selectedWorkouts = [];
let customWorkouts = []; // 将在初始化时从 defaultWorkouts 或 localStorage 加载
let dailyPlans = {};
let selectedPart = null; // 当前选中的部位，null 表示不筛选（显示全部）
let selectedEquipment = null; // 当前选中的器械类型，null 表示不筛选（显示全部）
let selectedSubPart = null; // 当前选中的子肌群，null 表示不筛选（显示全部）
let workoutPlanBox = []; // 锻炼计划框（可拖拽动作到这里）

// 获取默认锻炼数据
function getDefaultWorkouts() {
    // defaultWorkouts 已直接定义在文件中
    if (Array.isArray(defaultWorkouts) && defaultWorkouts.length > 0) {
        return defaultWorkouts;
    }
    // 如果为空，返回空数组
    console.warn('defaultWorkouts 数据为空');
    return [];
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('页面加载完成，开始初始化...');
    
    // 确保 defaultWorkouts 已加载
    const defaultData = getDefaultWorkouts();
    console.log('默认数据数量:', defaultData.length);
    
    // 先加载本地存储，再渲染
    loadFromLocalStorage();
    
    // 重置所有日期复选框为未选中状态
    document.querySelectorAll('.day-checkbox input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // 渲染UI
    renderPartSelect();
    renderEquipmentSelect();
    renderWorkoutList();
    renderPlanBox();
    
    // 设置事件监听器（在渲染每日计划之前，确保复选框事件已绑定）
    setupEventListeners();
    
    // 最后渲染每日计划配置
    renderDailyPlans();
    
    console.log('初始化完成，customWorkouts 数量:', customWorkouts.length);
    console.log('weekDays 数组:', weekDays);
    console.log('dailyPlans 对象:', dailyPlans);
});

// 渲染肌群筛选下拉菜单（显示主部位+子肌群）
function renderPartSelect() {
    const partSelect = document.getElementById('partSelect');
    if (!partSelect) {
        console.error('找不到 partSelect 元素');
        return;
    }
    
    // 保存当前选中的值
    const currentValue = partSelect.value;
    
    // 清空现有选项（保留"全部肌群"选项）
    partSelect.innerHTML = '<option value="">全部肌群</option>';
    
    // 根据选中的器械过滤可用的肌群
    let allSubParts;
    if (selectedEquipment) {
        allSubParts = getAvailableSubParts(selectedEquipment);
    } else {
        allSubParts = getAllSubParts();
    }
    
    if (allSubParts.length === 0) {
        // 如果没有子肌群数据，回退到显示主部位
        let availableParts;
        if (selectedEquipment) {
            const partIds = getAvailableParts(selectedEquipment);
            availableParts = partIds.map(partId => ({
                id: partId,
                name: partNames[partId] || partId
            }));
        } else {
            availableParts = getWorkoutParts();
        }
        
        availableParts.forEach(part => {
            const option = document.createElement('option');
            option.value = part.id;
            option.textContent = part.name;
            if (selectedPart === part.id && !selectedSubPart) {
                option.selected = true;
            }
            partSelect.appendChild(option);
        });
    } else {
        // 显示所有子肌群，每个前面显示主部位，按部位分组并添加分隔线
        let currentPartId = null;
        allSubParts.forEach(item => {
            // 如果切换到新的部位，添加分隔线
            if (currentPartId !== null && currentPartId !== item.partId) {
                const separator = document.createElement('option');
                separator.disabled = true;
                separator.style.borderTop = '1px solid #000';
                separator.style.padding = '5px 0';
                separator.innerHTML = '────────────────';
                partSelect.appendChild(separator);
            }
            
            const option = document.createElement('option');
            option.value = item.subPartId;
            option.dataset.part = item.partId;
            // 显示格式：主部位名称 · 子肌群名称
            option.textContent = `${item.partName} · ${item.subPartName}`;
            if (selectedSubPart === item.subPartId) {
                option.selected = true;
            }
            partSelect.appendChild(option);
            
            currentPartId = item.partId;
        });
    }
    
    // 检查当前选中的值是否仍然可用
    if (selectedSubPart) {
        const optionExists = Array.from(partSelect.options).some(opt => opt.value === selectedSubPart);
        if (optionExists) {
            partSelect.value = selectedSubPart;
        } else {
            // 如果之前选中的子肌群不在新的可用选项中，清除选择
            partSelect.value = '';
            selectedSubPart = null;
            selectedPart = null;
        }
    } else if (selectedPart && !selectedSubPart) {
        // 如果只选择了主部位（没有子肌群），检查是否仍然可用
        const optionExists = Array.from(partSelect.options).some(opt => opt.value === selectedPart);
        if (optionExists) {
            partSelect.value = selectedPart;
        } else {
            partSelect.value = '';
            selectedPart = null;
        }
    }
    
    // 绑定事件监听器（如果还没有绑定）
    if (!partSelect.hasAttribute('data-listener-bound')) {
        partSelect.addEventListener('change', (e) => {
            const value = e.target.value;
            if (!value) {
                // 选择"全部肌群"
                selectedSubPart = null;
                selectedPart = null;
            } else {
                const selectedOption = e.target.options[e.target.selectedIndex];
                selectedSubPart = value;
                selectedPart = selectedOption.dataset.part || null;
            }
            // 重新渲染器械筛选器（因为肌群改变了）
            renderEquipmentSelect();
            renderWorkoutList();
            saveToLocalStorage();
        });
        partSelect.setAttribute('data-listener-bound', 'true');
    }
}

// 渲染子肌群筛选按钮
function renderSubPartButtons() {
    const subPartContainer = document.getElementById('subPartFilter');
    if (!subPartContainer) return;
    
    subPartContainer.innerHTML = '';
    
    // 如果没有选中部位，不显示子肌群筛选
    if (!selectedPart) {
        subPartContainer.style.display = 'none';
        return;
    }
    
    const subParts = getSubParts(selectedPart);
    
    // 如果该部位没有子肌群，不显示筛选
    if (subParts.length === 0) {
        subPartContainer.style.display = 'none';
        return;
    }
    
    subPartContainer.style.display = 'block';
    
    const label = document.createElement('label');
    label.textContent = '按子肌群筛选：';
    subPartContainer.appendChild(label);
    
    const subPartButtons = document.createElement('div');
    subPartButtons.className = 'sub-part-buttons';
    
    subParts.forEach(subPart => {
        const button = document.createElement('button');
        button.className = `sub-part-btn ${selectedSubPart === subPart.id ? 'active' : ''}`;
        button.dataset.subPart = subPart.id;
        button.textContent = subPart.name;
        
        button.addEventListener('click', () => {
            // 如果点击已选中的按钮，则取消筛选
            if (selectedSubPart === subPart.id) {
                selectedSubPart = null;
            } else {
                selectedSubPart = subPart.id;
            }
            renderSubPartButtons();
            renderWorkoutList();
            saveToLocalStorage();
        });
        
        subPartButtons.appendChild(button);
    });
    
    subPartContainer.appendChild(subPartButtons);
}

// 渲染器械筛选下拉菜单
function renderEquipmentSelect() {
    const equipmentSelect = document.getElementById('equipmentSelect');
    if (!equipmentSelect) {
        console.error('找不到 equipmentSelect 元素');
        return;
    }
    
    // 保存当前选中的值
    const currentValue = equipmentSelect.value;
    
    // 清空现有选项（保留"全部器械"选项）
    equipmentSelect.innerHTML = '<option value="">全部器械</option>';
    
    // 根据选中的肌群过滤可用的器械
    let availableEquipment;
    if (selectedPart || selectedSubPart) {
        const equipmentIds = getAvailableEquipment(selectedPart, selectedSubPart);
        availableEquipment = equipmentIds.map(equipmentId => ({
            id: equipmentId,
            name: equipmentNames[equipmentId] || equipmentId
        }));
    } else {
        availableEquipment = getEquipmentTypes();
    }
    
    // 按名称长度从短到长排序
    availableEquipment.sort((a, b) => {
        const lenDiff = a.name.length - b.name.length;
        if (lenDiff !== 0) return lenDiff;
        // 如果长度相同，按字母顺序排序
        return a.name.localeCompare(b.name);
    });
    
    availableEquipment.forEach(equipment => {
        const option = document.createElement('option');
        option.value = equipment.id;
        option.textContent = equipment.name;
        if (selectedEquipment === equipment.id) {
            option.selected = true;
        }
        equipmentSelect.appendChild(option);
    });
    
    // 检查当前选中的器械是否仍然可用
    if (selectedEquipment) {
        const optionExists = Array.from(equipmentSelect.options).some(opt => opt.value === selectedEquipment);
        if (optionExists) {
            equipmentSelect.value = selectedEquipment;
        } else {
            // 如果之前选中的器械不在新的可用选项中，清除选择
            equipmentSelect.value = '';
            selectedEquipment = null;
        }
    }
    
    // 绑定事件监听器（如果还没有绑定）
    if (!equipmentSelect.hasAttribute('data-listener-bound')) {
        equipmentSelect.addEventListener('change', (e) => {
            const value = e.target.value;
            selectedEquipment = value || null;
            // 重新渲染肌群筛选器（因为器械改变了）
            renderPartSelect();
            renderWorkoutList();
            saveToLocalStorage();
        });
        equipmentSelect.setAttribute('data-listener-bound', 'true');
    }
}

// 获取部位名称
function getPartName(partId) {
    return partNames[partId] || partId || '未知';
}

// 获取器械名称
function getEquipmentName(equipmentId) {
    return equipmentNames[equipmentId] || equipmentId || '未知';
}

// 获取器械类型（用于CSS类名）
function getEquipmentType(equipmentId) {
    return equipmentTypes[equipmentId] || 'machine';
}

// 渲染锻炼项目列表
function renderWorkoutList() {
    const workoutList = document.getElementById('workoutList');
    if (!workoutList) {
        console.error('找不到 workoutList 元素');
        return;
    }
    
    workoutList.innerHTML = '';
    
    // 调试信息
    console.log('渲染锻炼列表 - customWorkouts 数量:', customWorkouts.length);
    console.log('当前筛选 - 部位:', selectedPart, '器械:', selectedEquipment);
    
    // 根据选中的部位、子肌群和器械过滤
    let filteredWorkouts = customWorkouts;
    
    if (selectedPart !== null && selectedPart !== undefined) {
        filteredWorkouts = filteredWorkouts.filter(w => hasPart(w, selectedPart));
        console.log('按部位筛选后数量:', filteredWorkouts.length);
    }
    
    if (selectedSubPart !== null && selectedSubPart !== undefined) {
        filteredWorkouts = filteredWorkouts.filter(w => w.subPart === selectedSubPart);
        console.log('按子肌群筛选后数量:', filteredWorkouts.length);
    }
    
    if (selectedEquipment !== null && selectedEquipment !== undefined) {
        filteredWorkouts = filteredWorkouts.filter(w => w.equipment === selectedEquipment);
        console.log('按器械筛选后数量:', filteredWorkouts.length);
    }
    
    if (filteredWorkouts.length === 0) {
        if (customWorkouts.length === 0) {
            workoutList.innerHTML = '<p class="no-workouts">⚠️ 未加载到锻炼数据，请检查 workouts-data.js 文件是否正确加载</p>';
        } else {
            workoutList.innerHTML = '<p class="no-workouts">当前筛选条件下暂无锻炼项目，请尝试调整筛选条件</p>';
        }
        return;
    }
    
    filteredWorkouts.forEach(workout => {
        const workoutItem = document.createElement('div');
        workoutItem.className = 'workout-item';
        workoutItem.dataset.id = workout.id;
        workoutItem.draggable = true;
        
        const isInPlanBox = workoutPlanBox.find(w => w.id === workout.id);
        if (isInPlanBox) {
            workoutItem.classList.add('in-plan-box');
        }
        
            // 只显示子肌群，不显示主部位
            const subPartName = workout.subPart ? subPartNames[workout.subPart] : null;
            
            workoutItem.innerHTML = `
                <div class="workout-item-header">
                    <h3>${workout.name}</h3>
                    <div class="workout-badges">
                        ${subPartName ? `<span class="sub-part-badge sub-${workout.subPart}">${subPartName}</span>` : ''}
                        <span class="equipment-badge equipment-${getEquipmentType(workout.equipment)}">${getEquipmentName(workout.equipment)}</span>
                    </div>
                </div>
                <p class="workout-sets">${workout.sets}</p>
                ${workout.description ? `<p class="workout-description">${workout.description}</p>` : ''}
                <div class="workout-item-footer">
                    <span>⏱️ ${workout.time} 分钟</span>
                    ${workout.calories ? `<span>🔥 ${workout.calories} 卡</span>` : ''}
                </div>
                <div class="workout-actions">
                    <button class="btn-add-to-box" title="添加到计划框">➕</button>
                </div>
                <div class="workout-actions-bottom">
                    <button class="btn-view-bilibili" title="在B站搜索动作">查看动作</button>
                </div>
            `;
        
        // 拖拽功能
        workoutItem.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('workoutId', workout.id.toString());
            workoutItem.classList.add('dragging');
        });
        
        workoutItem.addEventListener('dragend', (e) => {
            workoutItem.classList.remove('dragging');
        });
        
        // 双击添加到计划框
        workoutItem.addEventListener('dblclick', () => {
            addToPlanBox(workout);
        });
        
        // 点击添加到计划框按钮
        workoutItem.querySelector('.btn-add-to-box').addEventListener('click', (e) => {
            e.stopPropagation();
            addToPlanBox(workout);
        });
        
        // 点击查看B站按钮
        workoutItem.querySelector('.btn-view-bilibili').addEventListener('click', (e) => {
            e.stopPropagation();
            const searchUrl = `https://search.bilibili.com/all?keyword=${encodeURIComponent(workout.name)}`;
            window.open(searchUrl, '_blank');
        });
        
        workoutList.appendChild(workoutItem);
    });
    
    // 更新统计信息（在渲染完成后）
    updateWorkoutCount(filteredWorkouts.length, customWorkouts.length);
}

// 更新锻炼项目数量显示
function updateWorkoutCount(filteredCount, totalCount) {
    const workoutCountElement = document.getElementById('workoutCount');
    if (workoutCountElement) {
        if (filteredCount === totalCount) {
            workoutCountElement.textContent = `(${totalCount})`;
        } else {
            workoutCountElement.textContent = `(${filteredCount}/${totalCount})`;
        }
    }
}

// 添加到计划框
function addToPlanBox(workout) {
    if (!workoutPlanBox.find(w => w.id === workout.id)) {
        workoutPlanBox.push(workout);
        renderPlanBox();
        renderWorkoutList();
        renderDailyPlans();
        saveToLocalStorage();
    }
}

// 从计划框移除
function removeFromPlanBox(workoutId) {
    workoutPlanBox = workoutPlanBox.filter(w => w.id !== workoutId);
    renderPlanBox();
    renderWorkoutList();
    renderDailyPlans();
    saveToLocalStorage();
}

// 渲染计划框
function renderPlanBox() {
    const planBoxItems = document.getElementById('planBoxItems');
    const planBoxEmpty = document.getElementById('planBoxEmpty');
    
    planBoxItems.innerHTML = '';
    
    if (workoutPlanBox.length === 0) {
        planBoxEmpty.style.display = 'block';
    } else {
        planBoxEmpty.style.display = 'none';
        
        workoutPlanBox.forEach(workout => {
            const item = document.createElement('div');
            item.className = 'plan-box-item';
            item.dataset.id = workout.id;
            item.draggable = true;
            
            item.innerHTML = `
                <div class="plan-box-item-content">
                    <div class="plan-box-item-header">
                        <strong>${workout.name}</strong>
                        <button class="remove-from-box-btn" title="移除">✕</button>
                    </div>
                    <div class="plan-box-item-info">
                        ${workout.subPart && subPartNames[workout.subPart] ? `<span class="sub-part-badge sub-${workout.subPart}">${subPartNames[workout.subPart]}</span>` : ''}
                        <span class="equipment-badge equipment-${getEquipmentType(workout.equipment)}">${getEquipmentName(workout.equipment)}</span>
                        <span>${workout.sets}</span>
                    </div>
                </div>
            `;
            
            item.querySelector('.remove-from-box-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                removeFromPlanBox(workout.id);
            });
            
            // 计划框内也支持拖拽排序
            item.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('workoutId', workout.id.toString());
                e.dataTransfer.setData('source', 'planBox');
                item.classList.add('dragging');
            });
            
            item.addEventListener('dragend', (e) => {
                item.classList.remove('dragging');
            });
            
            planBoxItems.appendChild(item);
        });
    }
}

// 处理锻炼项目选择（已废弃，保留兼容性）
function handleWorkoutSelect(workoutId, selected) {
    // 此函数已不再使用，所有选择通过计划框完成
}

// 全局拖拽处理函数
function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    const planBox = document.getElementById('planBox');
    planBox.classList.add('drag-over');
}

function handleDrop(event) {
    event.preventDefault();
    const planBox = document.getElementById('planBox');
    planBox.classList.remove('drag-over');
    
    const workoutId = parseInt(event.dataTransfer.getData('workoutId'));
    const source = event.dataTransfer.getData('source');
    
    if (workoutId) {
        const workout = customWorkouts.find(w => w.id === workoutId);
        if (workout) {
            // 如果是从其他地方拖来的，添加到计划框
            if (source !== 'planBox') {
                addToPlanBox(workout);
            }
        }
    }
}

// 移除拖拽悬停效果
document.addEventListener('dragleave', (e) => {
    if (e.target.id === 'planBox' || e.target.closest('#planBox')) {
        const planBox = document.getElementById('planBox');
        planBox.classList.remove('drag-over');
    }
});

// 渲染每日计划配置
function renderDailyPlans() {
    console.log('=== renderDailyPlans 被调用 ===');
    
    const dailyPlansDiv = document.getElementById('dailyPlans');
    if (!dailyPlansDiv) {
        console.error('找不到 dailyPlans 元素');
        return;
    }
    
    // 清空容器
    dailyPlansDiv.innerHTML = '';
    
    // 获取所有选中的日期复选框
    const dayCheckboxes = document.querySelectorAll('.day-checkbox input[type="checkbox"]');
    console.log('找到的复选框数量:', dayCheckboxes.length);
    
    const checkedDays = Array.from(dayCheckboxes)
        .filter(cb => {
            console.log(`复选框值: ${cb.value}, 选中状态: ${cb.checked}`);
            return cb && cb.checked;
        })
        .map(cb => {
            const value = parseInt(cb.value);
            if (isNaN(value)) {
                console.warn('无效的复选框值:', cb.value);
                return null;
            }
            return value;
        })
        .filter(v => v !== null && v >= 0 && v < weekDays.length);
    
    console.log('renderDailyPlans - 选中的日期索引:', checkedDays);
    console.log('renderDailyPlans - weekDays:', weekDays);
    
    // 如果没有选中的日期，显示提示
    if (checkedDays.length === 0) {
        dailyPlansDiv.innerHTML = '<p style="color: #999; padding: 20px; text-align: center;">请先选择需要安排锻炼的日期</p>';
        return;
    }
    
    // 为每个选中的日期创建配置区域
    checkedDays.forEach(dayIndex => {
        // 确保 dailyPlans[dayIndex] 存在
        if (!dailyPlans[dayIndex]) {
            dailyPlans[dayIndex] = [];
        }
        
        // 创建日期计划容器
        const dayPlan = document.createElement('div');
        dayPlan.className = 'day-plan';
        
        // 创建标题
        const title = document.createElement('h3');
        title.textContent = `${weekDays[dayIndex]} 的锻炼计划`;
        dayPlan.appendChild(title);
        
        // 创建内容容器
        const dayPlanItems = document.createElement('div');
        dayPlanItems.className = 'day-plan-items';
        dayPlanItems.id = `day-plan-${dayIndex}`;
        
        // 创建选择器
        const select = document.createElement('select');
            select.className = 'day-workout-select';
            
        // 设置选择器事件
            select.addEventListener('change', (e) => {
                if (e.target.value) {
                    const workoutId = parseInt(e.target.value);
                    const workout = workoutPlanBox.find(w => w.id === workoutId);
                    if (workout) {
                        // 允许重复选择同一个动作
                        dailyPlans[dayIndex].push(workout);
                        renderDayPlanItems(dayIndex);
                        saveToLocalStorage();
                    }
                    e.target.value = '';
                }
            });
            
        // 更新选择器选项
        updateSelectorOptionsFromPlanBox(select);
        
        // 添加选择器到容器
            dayPlanItems.appendChild(select);
        
        // 添加容器到日期计划
        dayPlan.appendChild(dayPlanItems);
        
        // 添加日期计划到主容器
        dailyPlansDiv.appendChild(dayPlan);
        
        // 渲染该天的锻炼项目
        renderDayPlanItems(dayIndex);
    });
    
    console.log('每日计划配置渲染完成，共', checkedDays.length, '个日期');
}

// 更新单个选择器的选项（从计划框）
function updateSelectorOptionsFromPlanBox(select) {
    // 不保存之前的值，每次更新都重置为空，避免自动添加未选择的项目
    select.innerHTML = '<option value="">从计划框选择动作...</option>';
    
    if (workoutPlanBox.length === 0) {
        select.innerHTML = '<option value="">计划框为空，请先添加动作</option>';
        select.disabled = true;
        return;
    }
    
    select.disabled = false;
    
    workoutPlanBox.forEach(workout => {
        const option = document.createElement('option');
        option.value = workout.id;
        option.textContent = `${workout.name} (${workout.sets})`;
        select.appendChild(option);
    });
    
    // 确保选择器重置为空值，不恢复之前的选择
    select.value = '';
}

// 更新每日计划选择器（旧版，保留兼容性）
function updateDailyPlanSelectors() {
    document.querySelectorAll('.day-workout-select').forEach(select => {
        updateSelectorOptionsFromPlanBox(select);
    });
}

// 渲染某一天的锻炼项目
function renderDayPlanItems(dayIndex) {
    const dayPlanItems = document.getElementById(`day-plan-${dayIndex}`);
    if (!dayPlanItems) return;
    
    // 保留选择器
    const select = dayPlanItems.querySelector('select');
    dayPlanItems.innerHTML = '';
    if (select) dayPlanItems.appendChild(select);
    
    if (dailyPlans[dayIndex] && dailyPlans[dayIndex].length > 0) {
        // 创建卡片容器
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'day-plan-items-grid';
        
        dailyPlans[dayIndex].forEach((workout, index) => {
            const parts = normalizePart(workout.part);
            const partNamesList = parts.map(p => partNames[p] || p).join('、');
            const subPartName = workout.subPart ? subPartNames[workout.subPart] : '';
            const equipmentName = getEquipmentName(workout.equipment);
            
            const item = document.createElement('div');
            item.className = 'day-plan-item-card';
            item.innerHTML = `
                <div class="day-plan-item-header">
                    <h4>${workout.name}</h4>
                <button class="remove-btn" data-day="${dayIndex}" data-index="${index}">✕</button>
                </div>
                <div class="day-plan-item-badges">
                    ${subPartName ? `<span class="sub-part-badge sub-${workout.subPart}">${subPartName}</span>` : ''}
                    <span class="equipment-badge equipment-${getEquipmentType(workout.equipment)}">${equipmentName}</span>
                </div>
                <p class="day-plan-item-sets">${workout.sets}</p>
                <div class="day-plan-item-footer">
                    ${workout.time ? `<span>⏱️ ${workout.time} 分钟</span>` : ''}
                    ${workout.calories ? `<span>🔥 ${workout.calories} 卡</span>` : ''}
                </div>
            `;
            
            item.querySelector('.remove-btn').addEventListener('click', () => {
                dailyPlans[dayIndex].splice(index, 1);
                renderDayPlanItems(dayIndex);
                saveToLocalStorage();
            });
            
            itemsContainer.appendChild(item);
        });
        
        dayPlanItems.appendChild(itemsContainer);
    }
}

// 日期复选框事件处理函数（单独定义，避免重复绑定）
let dayCheckboxHandler = null;

// 打开/关闭肌群图解抽屉
function openMuscleDrawer() {
    const drawer = document.getElementById('muscleDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer && overlay) {
        drawer.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }
}

function closeMuscleDrawer() {
    const drawer = document.getElementById('muscleDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer && overlay) {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // 恢复滚动
    }
}

// 设置事件监听器
function setupEventListeners() {
    // 查看肌群按钮
    const viewMuscleBtn = document.getElementById('viewMuscleBtn');
    if (viewMuscleBtn) {
        viewMuscleBtn.addEventListener('click', openMuscleDrawer);
    }
    
    // 关闭抽屉按钮
    const drawerClose = document.getElementById('drawerClose');
    if (drawerClose) {
        drawerClose.addEventListener('click', closeMuscleDrawer);
    }
    
    // 点击遮罩层关闭抽屉
    const drawerOverlay = document.getElementById('drawerOverlay');
    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', closeMuscleDrawer);
    }
    
    // ESC键关闭抽屉
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMuscleDrawer();
        }
    });
    // 日期选择 - 使用事件委托，避免重复绑定
    const daysSelector = document.querySelector('.days-selector');
    if (daysSelector) {
        // 如果已经绑定过，先移除
        if (dayCheckboxHandler) {
            daysSelector.removeEventListener('change', dayCheckboxHandler);
        }
        
        // 创建新的事件处理函数
        dayCheckboxHandler = (e) => {
            if (e.target && e.target.type === 'checkbox' && e.target.closest('.day-checkbox')) {
                console.log('日期复选框状态改变:', e.target.value, e.target.checked);
                // 使用 setTimeout 确保复选框状态已更新
                setTimeout(() => {
            renderDailyPlans();
            saveToLocalStorage();
                }, 10);
            }
        };
        
        // 绑定事件
        daysSelector.addEventListener('change', dayCheckboxHandler);
        console.log('日期选择器事件监听器已绑定');
        } else {
        console.error('找不到 .days-selector 元素');
    }
    
    // 导出 Markdown 按钮
    document.getElementById('exportMarkdownBtn').addEventListener('click', exportMarkdown);
    
    // 一键分享到备忘录按钮
    const shareToNotesBtn = document.getElementById('shareToNotesBtn');
    if (shareToNotesBtn) {
        shareToNotesBtn.addEventListener('click', shareToNotes);
        // 检测是否支持 Web Share API，如果不支持则隐藏按钮
        if (!navigator.share) {
            shareToNotesBtn.style.display = 'none';
        }
    }('click', exportMarkdown);
    
    // 预览按钮
    document.getElementById('previewBtn').addEventListener('click', previewMarkdown);
    
    // 清空按钮
    document.getElementById('clearBtn').addEventListener('click', () => {
        if (confirm('确定要清空所有配置吗？')) {
            selectedWorkouts = [];
            dailyPlans = {};
            workoutPlanBox = [];
            customWorkouts = [...getDefaultWorkouts()];
            selectedPart = null;
            selectedEquipment = null;
            renderPartSelect();
            renderEquipmentSelect();
            renderWorkoutList();
            renderPlanBox();
            renderDailyPlans();
            localStorage.removeItem('workoutConfig');
            console.log('已清空配置，恢复默认数据，共', customWorkouts.length, '个锻炼项目');
        }
    });
    
    // 清空计划框按钮
    const clearPlanBoxBtn = document.getElementById('clearPlanBoxBtn');
    if (clearPlanBoxBtn) {
        clearPlanBoxBtn.addEventListener('click', () => {
            if (confirm('确定要清空计划框吗？')) {
                workoutPlanBox = [];
                renderPlanBox();
                renderWorkoutList();
                renderDailyPlans();
                saveToLocalStorage();
            }
        });
    }
}

// 导出 Markdown 文件
function exportMarkdown() {
    const markdown = generateMarkdown();
    
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `锻炼计划_${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert('Markdown 文件已导出！可以导入到 iPhone 备忘录。');
}

// 一键分享到备忘录（使用 Web Share API）
async function shareToNotes() {
    const markdown = generateMarkdown();
    
    // 检查是否支持 Web Share API（主要在移动设备上支持）
    if (navigator.share) {
        try {
            // 优先尝试分享文件（iOS Safari支持文件分享）
            if (navigator.canShare) {
                try {
                    // 创建Markdown文件
                    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
                    const file = new File([blob], `锻炼计划_${new Date().toISOString().split('T')[0]}.md`, { 
                        type: 'text/markdown;charset=utf-8' 
                    });
                    
                    // 检查是否可以分享文件
                    const shareData = {
                        title: '我的锻炼计划',
                        files: [file]
                    };
                    
                    if (navigator.canShare(shareData)) {
                        await navigator.share(shareData);
                        console.log('文件分享成功');
                        // 提示用户选择备忘录并选择"在备忘录中打开"
                        setTimeout(() => {
                            alert('✅ 分享成功！\n\n在分享菜单中选择"备忘录"，然后选择"在备忘录中打开"即可看到渲染后的效果。');
                        }, 500);
                        return;
                    }
                } catch (fileError) {
                    console.log('文件分享不支持，尝试文本分享');
                }
            }
            
            // 如果不支持文件分享，分享文本内容
            // iPhone备忘录会自动识别Markdown格式并渲染
            await navigator.share({
                title: '我的锻炼计划',
                text: markdown
            });
            console.log('文本分享成功');
            // 提示用户
            setTimeout(() => {
                alert('✅ 分享成功！\n\n在分享菜单中选择"备忘录"即可。备忘录会自动识别Markdown格式并渲染。');
            }, 500);
        } catch (error) {
            // 用户取消分享或其他错误
            if (error.name !== 'AbortError') {
                console.error('分享失败:', error);
                // 如果分享失败，降级为复制到剪贴板
                fallbackCopyToClipboard(markdown);
            }
        }
    } else {
        // 不支持 Web Share API，使用复制到剪贴板作为降级方案
        fallbackCopyToClipboard(markdown);
    }
}

// 降级方案：复制到剪贴板
function fallbackCopyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            alert('内容已复制到剪贴板！\n\n请在 iPhone 备忘录中粘贴内容。\n\n提示：打开备忘录 → 新建笔记 → 长按 → 粘贴');
        }).catch(err => {
            console.error('复制失败:', err);
            alert('复制失败，请使用"导出 Markdown 文件"功能。');
        });
    } else {
        // 更老的浏览器，使用传统方法
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            alert('内容已复制到剪贴板！\n\n请在 iPhone 备忘录中粘贴内容。\n\n提示：打开备忘录 → 新建笔记 → 长按 → 粘贴');
        } catch (err) {
            console.error('复制失败:', err);
            alert('复制失败，请使用"导出 Markdown 文件"功能。');
        }
        document.body.removeChild(textarea);
    }
}

// 生成 Markdown 格式的锻炼计划
function generateMarkdown() {
    let markdown = '# 我的锻炼计划\n\n';
    markdown += `生成时间：${new Date().toLocaleString('zh-CN')}\n\n`;
    markdown += '---\n\n';
    
    // 检查是否有每日计划
    const hasDailyPlans = Object.keys(dailyPlans).length > 0 && 
        Object.values(dailyPlans).some(plan => plan && plan.length > 0);
    
    if (hasDailyPlans) {
        // 如果有每日计划，按日期生成
        markdown += '## 📅 每日锻炼计划\n\n';
        
        Object.keys(dailyPlans).sort((a, b) => parseInt(a) - parseInt(b)).forEach(dayIndex => {
            const dayPlan = dailyPlans[dayIndex];
            if (dayPlan && dayPlan.length > 0) {
                const dayName = weekDays[parseInt(dayIndex)];
                markdown += `### ${dayName}\n\n`;
                
        let totalTime = 0;
        let totalCalories = 0;
        
                dayPlan.forEach((workout, index) => {
                    const parts = normalizePart(workout.part);
                    const partNamesList = parts.map(p => partNames[p] || p).join('、');
                    const subPartName = workout.subPart ? subPartNames[workout.subPart] : '';
                    const equipmentName = getEquipmentName(workout.equipment);
                    
                    // 使用编号列表格式，带勾选框
                    markdown += `- [ ] ${index + 1}. **${workout.name}**\n`;
                    markdown += `   - 组数：${workout.sets}\n`;
                    markdown += `   - 部位：${partNamesList}${subPartName ? ` · ${subPartName}` : ''}\n`;
                    markdown += `   - 器械：${equipmentName}\n`;
            if (workout.time) {
                        markdown += `   - 时间：${workout.time} 分钟\n`;
                totalTime += workout.time;
                    }
            if (workout.calories) {
                        markdown += `   - 卡路里：${workout.calories} 卡\n`;
                totalCalories += workout.calories;
                    }
                    markdown += '\n';
                });
                
                markdown += `**总计**：预计 ${totalTime} 分钟，消耗约 ${totalCalories} 卡路里\n\n`;
                markdown += '---\n\n';
            }
        });
    } else if (workoutPlanBox.length > 0) {
        // 如果没有每日计划，但有计划框中的动作，生成通用计划
        markdown += '## 💪 锻炼计划\n\n';
        markdown += '### 今日训练\n\n';
        
        let totalTime = 0;
        let totalCalories = 0;
        
        workoutPlanBox.forEach((workout, index) => {
            const parts = normalizePart(workout.part);
            const partNamesList = parts.map(p => partNames[p] || p).join('、');
            const subPartName = workout.subPart ? subPartNames[workout.subPart] : '';
            const equipmentName = getEquipmentName(workout.equipment);
            
            // 使用编号列表格式，带勾选框
            markdown += `- [ ] ${index + 1}. **${workout.name}**\n`;
            markdown += `   - 组数：${workout.sets}\n`;
            markdown += `   - 部位：${partNamesList}${subPartName ? ` · ${subPartName}` : ''}\n`;
            markdown += `   - 器械：${equipmentName}\n`;
            if (workout.time) {
                markdown += `   - 时间：${workout.time} 分钟\n`;
                totalTime += workout.time;
            }
            if (workout.calories) {
                markdown += `   - 卡路里：${workout.calories} 卡\n`;
                totalCalories += workout.calories;
            }
            markdown += '\n';
        });
        
        markdown += `**总计**：预计 ${totalTime} 分钟，消耗约 ${totalCalories} 卡路里\n\n`;
} else {
        markdown += '⚠️ 还没有选择任何锻炼动作，请先添加动作到计划框或配置每日计划。\n\n';
    }
    
    markdown += '---\n\n';
    markdown += '*由 ExerciseMapper 生成*\n';
    
    return markdown;
}

// 预览 Markdown
function previewMarkdown() {
    const previewSection = document.getElementById('previewSection');
    const previewContent = document.getElementById('previewContent');
    
    const markdown = generateMarkdown();
    previewContent.textContent = markdown;
    previewSection.style.display = previewSection.style.display === 'none' ? 'block' : 'none';
}

// 保存到本地存储
function saveToLocalStorage() {
    const config = {
        selectedWorkouts,
        dailyPlans,
        customWorkouts,
        workoutPlanBox,
        selectedPart,
        selectedEquipment,
        selectedSubPart
    };
    localStorage.setItem('workoutConfig', JSON.stringify(config));
}

// 从本地存储加载
function loadFromLocalStorage() {
    // 获取默认数据
    const defaultData = getDefaultWorkouts();
    const defaultDataCount = defaultData.length;
    
            // 始终使用代码中定义的 defaultWorkouts 作为基础，并标准化 part 字段
    customWorkouts = defaultData.map(workout => {
        const normalized = {...workout};
        // 标准化 part 字段：如果是字符串，转换为数组
        if (normalized.part && !Array.isArray(normalized.part)) {
            normalized.part = [normalized.part];
        }
        return normalized;
    });
    
    const saved = localStorage.getItem('workoutConfig');
    if (saved) {
        try {
            const config = JSON.parse(saved);
            
            // 每次刷新都重置所有可选内容
            selectedWorkouts = [];
            dailyPlans = {};
            workoutPlanBox = [];
            // 重置筛选条件，每次刷新都默认不选择任何筛选（显示全部）
            selectedPart = null;
            selectedEquipment = null;
            selectedSubPart = null;
            
            // 如果 localStorage 中有保存的 customWorkouts，检查是否有用户添加的自定义动作
            if (config.customWorkouts && Array.isArray(config.customWorkouts) && config.customWorkouts.length > 0) {
                // 找出用户自定义添加的动作（id 大于 1000 或不在 defaultWorkouts 中的）
                const defaultIds = new Set(defaultData.map(w => w.id));
                const userCustomWorkouts = config.customWorkouts.filter(w => {
                    // 用户自定义的动作 id 通常很大（使用 Date.now()），或者不在默认列表中
                    return !defaultIds.has(w.id);
                });
                
                // 为旧数据添加默认部位和器械（兼容性处理），并标准化 part 字段
                userCustomWorkouts.forEach(workout => {
                    // 标准化 part 字段：如果是字符串，转换为数组
                    if (!workout.part) {
                        workout.part = ['core'];
                    } else if (!Array.isArray(workout.part)) {
                        workout.part = [workout.part];
                    }
                    if (!workout.equipment) {
                        workout.equipment = 'bodyweight';
                    }
                });
                
                // 合并：默认数据 + 用户自定义数据
                if (userCustomWorkouts.length > 0) {
                    customWorkouts = [...defaultData, ...userCustomWorkouts];
                    console.log('合并数据：默认', defaultDataCount, '个 + 用户自定义', userCustomWorkouts.length, '个 = 共', customWorkouts.length, '个锻炼项目');
                } else {
                    console.log('使用默认数据，共', customWorkouts.length, '个锻炼项目（localStorage 中没有用户自定义动作）');
                }
            } else {
                console.log('使用默认数据，共', customWorkouts.length, '个锻炼项目');
            }
        } catch (e) {
            console.error('加载配置失败:', e);
            // 出错时使用默认数据，并重置所有内容
            customWorkouts = [...defaultData];
            selectedWorkouts = [];
            dailyPlans = {};
            workoutPlanBox = [];
            selectedPart = null;
            selectedEquipment = null;
            selectedSubPart = null;
            console.log('出错后使用默认数据，共', customWorkouts.length, '个锻炼项目');
        }
    } else {
        // 没有保存的数据，使用默认数据，并重置所有内容
        selectedWorkouts = [];
        dailyPlans = {};
        workoutPlanBox = [];
        selectedPart = null;
        selectedEquipment = null;
        selectedSubPart = null;
        console.log('首次使用，加载默认数据，共', customWorkouts.length, '个锻炼项目');
    }
    
    // 如果 customWorkouts 仍然为空，尝试直接使用 defaultWorkouts
    if (customWorkouts.length === 0 && defaultData.length > 0) {
        customWorkouts = [...defaultData];
        console.log('customWorkouts 为空，强制使用默认数据，共', customWorkouts.length, '个锻炼项目');
    }
}

