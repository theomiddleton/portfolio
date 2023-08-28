function checkUserRole(session) {
    if (
        !session ||
        !session.user ||
        !session.user.orginizationMemberships ||
        !session.user.orginizationMemberships.length === 0
    ) {
        return null;
    }

    const orginizationMemberships = session.user.orginizationMemberships;

    for (const membership of orginizationMemberships) {
        if (membership.role) {
            return membership.role.toLowerCase();
        }
    }

    return null;
}

export { checkUserRole };