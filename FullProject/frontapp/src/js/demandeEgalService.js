

const demande_API ="http://localhost:8059/egalisation/pending"
class demandeEgalService {
    async getDemande() {
      try {
        const response = await fetch(demande_API);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
  
        return data;
      } catch (error) {
        console.error('Erreur de fetch :', error);
        throw error;
      }
    }
  }
  
export default new demandeEgalService()