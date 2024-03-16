import axios from 'axios';

const demande_API ="http://localhost:8088/citoyen"
class demandeInscService{
    getDemande(){
        return axios.get(demande_API )
    }
}
export default new demandeInscService()