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
        const formattedSalary = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(salary);
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of ${formattedSalary} per year!`;
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

let Jobs = new JobOffers ("Google", "Strategy Analyst");

console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));

console.log(Jobs.jobOffer("John Doe-8"));

console.log(Jobs.jobOffer("Peter Parker-4"));

console.log(Jobs.salaryBonus("John Doe"));

console.log(Jobs.salaryBonus("Peter Parker"));