class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        let addedCandidates = [];
        candidates.forEach(candidate => {
            const [name, education, yearsExperience] = candidate.split('-');
            const existingCandidate = this.jobCandidates.find(c => c.name === name);
            if (existingCandidate) {
                if (parseInt(existingCandidate.yearsExperience) < parseInt(yearsExperience)) {
                    existingCandidate.yearsExperience = yearsExperience;
                }
            } else {
                this.jobCandidates.push({ name, education, yearsExperience });
                addedCandidates.push(name);
            }
        });
        return `You successfully added candidates: ${addedCandidates.join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        const [name, minimalExperience] = chosenPerson.split('-');
        const candidate = this.jobCandidates.find(c => c.name === name);
        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        if (parseInt(candidate.yearsExperience) < parseInt(minimalExperience)) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }
        candidate.yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        const candidate = this.jobCandidates.find(c => c.name === name);
        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        let salary;
        switch (candidate.education) {
            case 'Bachelor':
                salary = 50000;
                break;
            case 'Master':
                salary = 60000;
                break;
            default:
                salary = 40000;
                break;
        }
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $${salary} per year!`;
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error('Candidate Database is empty!');
        }
        const sortedCandidates = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
        let database = 'Candidates list:\n';
        sortedCandidates.forEach(candidate => {
            database += `${candidate.name}-${candidate.yearsExperience}\n`;
        });
        return database.trim();
    }
}