/** Application routes.
 ** Non-polymorphic variant are part of their scopes (e.g. their modules).
 ** Whereas the namespace of polymorphic variant is global, that fit perfectly for route. */
type routes = [
  | `NotFound
  | `Home
  | `Faq
  | `DeepLink(option(string))
];

/** Match route through path. */
let matcher =
  fun
    | ["deep", ...rest] =>
      switch rest {
      | ["link", page] => `DeepLink(Some(page))
      | ["link"] | _ => `DeepLink(None)
      }
    | ["faq"] => `Faq
    | [""] | [] => `Home
    | _ => `NotFound;
