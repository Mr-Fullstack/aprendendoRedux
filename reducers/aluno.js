import { Consts } from "../consts.js"

const alunoInitialState = {
  nome: 'Marcos Antonio Cerqueira',
  email: 'meumelhoremail@email.com',
  diasRestantes: 120,
  cursos:[
    {
      id: 1,
      nome: 'Design',
      completa: true,
      aulas:[
        {
          id: 1, 
          nome: 'Design - 01',
          description: 'Aprendendo algo sobre isso',
          completa: false
        },
        {
          id: 2, 
          nome: 'Design - 02',
          description: 'Aprendendo algo sobre isso',
          completa: false
        },
        {
          id: 3, 
          nome: 'Design - 03',
          description: 'Aprendendo algo sobre isso',
          completa: false
        },
        {
          id: 4, 
          nome: 'Design - 04',
          description: 'Aprendendo algo sobre isso',
          completa: false
        }
      ]
    },
    {
      id: 2,
      nome: 'HTML',
      completa: false,
      aulas:[
        {
          id: 1, 
          nome: 'HTML - 01',
          description: 'Aprendendo algo sobre isso',
          completa: false
        },
        {
          id: 2, 
          nome: 'HTML - 02',
          description: 'Aprendendo algo sobre isso',
          completa: false
        },
        {
          id: 3, 
          nome: 'HTML - 03',
          description: 'Aprendendo algo sobre isso',
          completa: false
        },
        {
          id: 4, 
          nome: 'HTML - 04',
          description: 'Aprendendo algo sobre isso',
          completa: false
        }
      ]
    },
    {
      id: 3,
      nome: 'CSS',
      completa: false,
      aulas:[
        {
          id: 1, 
          nome: 'CSS - 01',
          description: 'Aprendendo algo sobre isso',
          completa: false
        },
        {
          id: 2, 
          nome: 'CSS - 02',
          description: 'Aprendendo algo sobre isso',
          completa: false
        },
        {
          id: 3, 
          nome: 'CSS - 03',
          description: 'Aprendendo algo sobre isso',
          completa: false
        },
        {
          id: 4, 
          nome: 'CSS - 04',
          description: 'Aprendendo algo sobre isso',
          completa:false
        }
      ]
    },
    {
      id: 4,
      nome: 'JavaScript',
      completa: false,
      aulas:[
        {
          id: 1, 
          nome: 'JavaScript - 01',
          description: 'Aprendendo algo sobre isso',
          completa: false
        },
        {
          id: 2, 
          nome: 'JavaScript - 02',
          description: 'Aprendendo algo sobre isso',
          completa: false
        },
        {
          id: 3, 
          nome: 'JavaScript - 03',
          description: 'Aprendendo algo sobre isso',
          completa: false
        },
        {
          id: 4, 
          nome: 'JavaScript - 04',
          description: 'Aprendendo algo sobre isso',
          completa: false
        }
      ]
    },
  ]
};

export const aluno = immer.produce( ( state, action ) => {

switch(action.type){
  case Consts.INCREMENTAR_TEMPO:
    state.diasRestantes  = state.diasRestantes + 1
    break;
  case Consts.REDUZIR_TEMPO:
    state.diasRestantes  = state.diasRestantes - 1;
    break;
  case Consts.REDUZIR_TEMPO_AULA:
    state.diasRestantes  = state.diasRestantes - 7.5;
    break;
  case Consts.MODIFICAR_EMAIL:
    state.email = action.payload.email 
    break;
  case Consts.COMPLETAR_AULA:
    const indexCurso = state.cursos.findIndex( (x) => x.id === action.payload.idCurso);
    const indexAula =  state.cursos[indexCurso].aulas.findIndex( (y) => y.id === action.payload.idAula);
    if(!isNaN(indexAula) && state.cursos[indexCurso].aulas[indexAula]){
      state.cursos[indexCurso].aulas[indexAula].completa = true;
    }
    break;
  case Consts.COMPLETAR_CURSO:
    // completa todas as aulas
    return state.cursos.map(curso => curso.completa = true ) 
  case Consts.RESETAR_CURSO:
    // state.diasRestantes = state.diasRestantes  - 1;
    return state.cursos.map(curso => curso.completa = false ) 
  default:
    return state;
}},alunoInitialState)