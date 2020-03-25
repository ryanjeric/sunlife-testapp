import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  // header
  getUserinfo():any{
    return {
      'name': 'Chu Ying,Rebecca',
      'img' : 'https://placekitten.com/300/300'
    }
  }
  // dashboard
  getCoverage():any{
    return {
      'life' : 'HKD 6,146,066',
      'critical' : 'up to HKD 1,000,000*',
      'medical' : 'up to: HKD 721,800/year,HKD 600,000/disability',
      'accident' : 'up to HKD 1,000,000*'
    }
  }
  getAssets():any{
    return [
      {'title':'Investment-Linked','value':10539},
      {'title':'Savings','value':161688}
    ]
  }

  // all policies
  getAllpolicies():any{
    return [
      {
        'title':'LifeSuper 20',
        'policyno':'601007042',
        'status':'Inforce',
        'hkd': [
          {'title':'Sum Assured','value':5900000},
          {'title':'Surrender Value*','value':240770},
          {'title':'Modal Premium / Regular Contribution including Levy','value':3441.00}
        ],
        'premium':true,
        'premiumText':'Premium of HKD 1,280.90 due in 3 days'
      },
      {
        'title':'Sun Architect',
        'policyno':'201491780',
        'status':'Inforce',
        'hkd': [
          {'title':'Contribution Amount','value':5900000},
          {'title':'Fund Balance*','value':10539},
          {'title':'Surrender Value','value':7337},
          {'title':'Modal Premium / Regular Contribution including Levy','value':3441.00}
        ],
        'premium':false,
      },
      {
        'title':'Critical Medical Care Plan II',
        'policyno':'048267442',
        'status':'Inforce',
        'hkd': [
          {'title':'Amount of Benefit','value':500000},
          {'title':'Modal Premium / Regular Contribution including Levy','value':3441.00}
        ],
        'premium':false,
      },
      {
        'title':'SunEducator 5',
        'policyno':'60158495',
        'status':'Inforce',
        'hkd': [
          {'title':'Amount of Benefit','value':500000},
          {'title':'Cash Value*','value':2046},
          {'title':'Surrender Value','value':2251},
          {'title':'Modal Premium / Regular Contribution including Levy','value':3441.00}
        ],
        'premium':false,
      }

    ]
  }

}
