import { Consts } from "../consts.js"

function incrementarTempo(){
    return {
      type:Consts.INCREMENTAR_TEMPO,
      payload:{}
    }
}


function reduzirTempo(){
  return {
    type:Consts.REDUZIR_TEMPO,
    payload:{}
  }
}

function reduzirTempoAula(){
  return {
    type:Consts.REDUZIR_TEMPO_AULA,
    payload:{}
  }
}
function modificarEmail(email){
  return  {
    type:Consts.MODIFICAR_EMAIL,
    payload:{email}
  }
}

function completarAula(idCurso,idAula){
  return {
    type:Consts.COMPLETAR_AULA,
    payload:{ idCurso, idAula }
  }
}

function completarCurso(id){
  return {
    type:Consts.COMPLETAR_CURSO,
    payload:id
  }
}

function resetarCurso(id){
  return {
    type:Consts.RESETAR_CURSO,
    payload:id
  }
}

export const aluno={
  incrementarTempo,
  reduzirTempo,
  modificarEmail,
  completarAula,
  completarCurso,
  resetarCurso,
  reduzirTempoAula
}