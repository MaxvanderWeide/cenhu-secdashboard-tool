export class CSVRecord {
  public dateAssigned: string;
  public dateStarted: string;
  public dateCompleted: string;
  public teams: string;
  public progress: number;
  public timeSpent: number;
  public reviewScore: number;
  public trainerReview: number;
  public certificate: string;
  public quizScore: number;
  public quizAttempts: number;


  constructor(dateAssigned: string, dateStarted: string, dateCompleted: string,
              teams: string, progress: number, timeSpent: number, reviewScore: number,
              trainerReview: number, certificate: string, quizScore: number, quizAttempts: number) {
    this.dateAssigned = dateAssigned;
    this.dateStarted = dateStarted;
    this.dateCompleted = dateCompleted;
    this.teams = teams;
    this.progress = progress;
    this.timeSpent = timeSpent;
    this.reviewScore = reviewScore;
    this.trainerReview = trainerReview;
    this.certificate = certificate;
    this.quizScore = quizScore;
    this.quizAttempts = quizAttempts;
  }
}
