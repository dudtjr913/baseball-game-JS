const todos = [
  {
    name: '자바스크립트 공부하기',
    tags: ['programming', 'javascript'],
    status: 'todo',
    id: 12123123,
  },
  {
    name: '그림 그리기',
    tags: ['picture', 'favorite'],
    status: 'doing',
    id: 312323,
  },
  {
    name: 'ios 공부하기',
    tags: ['ios', 'study', 'ios'],
    status: 'todo',
    id: 1122568,
  },
  {
    name: '전화하기',
    tags: ['call'],
    status: 'doing',
    id: 112338,
  },
  {
    name: 'html 공부하기',
    tags: ['html', 'study'],
    status: 'done',
    id: 3451128,
  },
  {
    name: 'css 공부하기',
    tags: ['css', 'study'],
    status: 'done',
    id: 977621,
  },
  {
    name: '양치하기',
    tags: ['wash'],
    status: 'done',
    id: 799820,
  },
  {
    name: '문제풀기',
    tags: ['solve', 'study'],
    status: 'done',
    id: 110082,
  },
];

const show = (obj) => {
  if (obj === 'all') {
    return showAll(todos);
  }

  return showStatus(todos, obj);
};

const showAll = (data) => {
  const allStatus = {};
  const result = [];
  data.forEach((key) => {
    const status = key.status;
    if (!allStatus[status]) {
      return (allStatus[status] = 1);
    }
    return allStatus[status]++;
  });

  for (const key in allStatus) {
    result.push(`${key}:${allStatus[key]}개`);
  }

  return `현재상태 : ${result.join(', ')}`;
};

const showStatus = (data, obj) => {
  const status = [];
  data.forEach((key) => {
    if (key.status === obj) {
      status.push(`'${key.name}'`);
    }
  });

  return `todo리스트 : 총${status.length}건 : ${status.join(' , ')}`;
};

console.log(show('all'));
console.log(show('todo'));
