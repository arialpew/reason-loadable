


function matcher(param) {
  if (param) {
    switch (param[0]) {
      case "" : 
          if (param[1]) {
            return /* NotFound */-296251313;
          } else {
            return /* Home */803993151;
          }
      case "deep" : 
          var rest = param[1];
          if (rest) {
            if (rest[0] === "link") {
              var match = rest[1];
              if (match) {
                if (match[1]) {
                  return /* `DeepLink */[
                          718723174,
                          /* None */0
                        ];
                } else {
                  return /* `DeepLink */[
                          718723174,
                          /* Some */[match[0]]
                        ];
                }
              } else {
                return /* `DeepLink */[
                        718723174,
                        /* None */0
                      ];
              }
            } else {
              return /* `DeepLink */[
                      718723174,
                      /* None */0
                    ];
            }
          } else {
            return /* `DeepLink */[
                    718723174,
                    /* None */0
                  ];
          }
          break;
      case "faq" : 
          if (param[1]) {
            return /* NotFound */-296251313;
          } else {
            return /* Faq */3502774;
          }
      default:
        return /* NotFound */-296251313;
    }
  } else {
    return /* Home */803993151;
  }
}

export {
  matcher ,
  
}
/* No side effect */
