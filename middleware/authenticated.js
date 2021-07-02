export default function({ store, redirect }) {
  // Si l'utilisateur n'est pas authentifié
  return redirect("/");
}
